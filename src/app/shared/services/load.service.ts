import { Injectable } from '@angular/core';

import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable()
export class LoadService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);

  isLoading$ = this._isLoading$.asObservable();

  startLoad(): void {
    this._isLoading$.next(true);
  }

  endLoad(): void {
    this._isLoading$.next(false);
  }

  wrapObservable(observable: Observable<any>): Observable<any> {
    this.startLoad();
    return observable.pipe(
      finalize(() => {
        this.endLoad();
      })
    );
  }
}
