import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-intersection-trigger',
  templateUrl: './intersection-trigger.component.html',
  styleUrls: ['./intersection-trigger.component.scss'],
})
export class IntersectionTriggerComponent implements AfterViewInit {
  /**
   * Порог срабатывания в пикселях от нижней границы scroll контейнера
   */
  @Input() threshold = 100;

  /**
   * Признак того что данные загружены и есть еще данные для загрузки,
   * Если данных для загрузки больше нет передать false
   */
  @Input({ required: true }) set isLoading(value: boolean | null) {
    this._isLoading$.next(!!value);
  }

  @Output() trigger = new EventEmitter<void>();

  @ViewChild('triggerElement') triggerElement?: ElementRef<HTMLDivElement>;

  private _intersectionObserver: Observable<true> | null = null;

  private _isLoading$ = new BehaviorSubject(false);

  get triggerElementHeight(): string {
    return `${this.threshold}px`;
  }

  ngAfterViewInit(): void {
    if (this.triggerElement) {
      this._intersectionObserver = this.createObserver(
        this.triggerElement.nativeElement
      );

      this._isLoading$
        .pipe(
          switchMap((isLoading) => {
            if (!isLoading && this._intersectionObserver) {
              return this._intersectionObserver;
            }
            return EMPTY;
          })
        )
        .subscribe(() => {
          this._isLoading$.next(true);
          this.trigger.emit();
        });
    }
  }

  private createObserver(div: HTMLDivElement): Observable<true> {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0.0],
    };

    return new Observable<IntersectionObserverEntry[]>((observer) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        observer.next(entries);
      }, options);

      intersectionObserver.observe(div);

      return () => {
        intersectionObserver.disconnect();
      };
    }).pipe(
      untilDestroyed(this),
      mergeMap((entries: IntersectionObserverEntry[]) => entries),
      map((entry) => entry.isIntersecting),
      filter((entry): entry is true => !!entry)
    );
  }
}
