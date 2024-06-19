import { HttpErrorResponse } from '@angular/common/http';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';

import { BehaviorSubject, EMPTY, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  finalize,
  first,
  skipWhile,
  switchMap,
  tap,
} from 'rxjs/operators';

const DEFAULT_PAGE_SIZE = 10;

export abstract class AbstractCursorPageableService<T> {
  protected size: number;
  protected page = 1;
  protected previous: string | null = null;

  private _pages = new BehaviorSubject<number>(0);
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _list$ = new BehaviorSubject<T[] | null>(null);
  private _hasNextPage$ = new BehaviorSubject<boolean>(false);
  private _isCanceled$ = new BehaviorSubject<boolean>(false);
  private _count$ = new BehaviorSubject<number>(0);
  private _currentPage$ = new BehaviorSubject<number>(0);

  constructor(pageSize: number = DEFAULT_PAGE_SIZE) {
    this.size = pageSize;
  }

  public get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }
  public get list$(): Observable<T[] | null> {
    return this._list$.asObservable();
  }
  public get hasNextPage$(): Observable<boolean> {
    return this._hasNextPage$.asObservable();
  }
  public get count$(): Observable<number> {
    return this._count$.asObservable();
  }
  public get size$(): Observable<number> {
    return of(this.size);
  }

  public get currentPage$(): Observable<number> {
    return this._currentPage$.asObservable();
  }

  protected abstract loadList(
    query: TCursorPageableQuery
  ): Observable<TCursorPageable<T>>;

  private _loadList(isStack = false): void {
    this._isLoading$.next(true);
    this._isCanceled$
      .pipe(
        switchMap((isCanceled) => {
          if (isCanceled) {
            return of();
          }
          return this.loadList({ size: this.size, page: this.page }).pipe(
            tap((pageableDataList) => {
              this._count$.next(pageableDataList.count);
              this._currentPage$.next(this.page + 1);
              this._hasNextPage$.next(
                this.page < pageableDataList.count / this.size
              );
              this.page += 1;

              if (isStack) {
                this._list$.next(
                  (this._list$.getValue() ?? []).concat(
                    pageableDataList.results
                  )
                );
              } else {
                this._list$.next(pageableDataList.results);
              }
            }),
            catchError(this.handleError),
            finalize(() => {
              this._isLoading$.next(false);
            })
          );
        })
      )
      .subscribe();
  }

  updateList(): boolean {
    if (this._isLoading$.getValue()) {
      return false;
    }

    this._loadList();

    if (!this._hasNextPage$.getValue()) {
      return false;
    }

    return true;
  }

  updateAtPage(page: number): void {
    this.page = page - 1;
    this.updateList();
  }

  updateCurrentPage(): void {
    this.page = this._currentPage$.getValue() - 1;
    this.updateList();
  }

  resetAndUpdateList(): void {
    this.page = 1;
    this.updateList();
  }

  resetList(initValue: T[] | null = []): void {
    this.page = 1;
    this._list$.next(initValue);
    this.previous = null;
  }

  nextPage(isStack = true): Observable<boolean> {
    if (this._isLoading$.getValue()) {
      return EMPTY;
    }

    if (!this._hasNextPage$.getValue()) {
      return EMPTY;
    }

    this._loadList(isStack);
    return this._isLoading$.pipe(
      skipWhile((isLoading) => isLoading),
      first()
    );
  }

  protected handleError = (error: HttpErrorResponse) => {
    console.error(error);
    return throwError(() => error);
  };
}
