import { Injectable } from '@angular/core';

import { AbstractCursorPageableFilteredService } from 'src/app/core/api/pagination/abstract-cursor-pageable-filtered.service';
import { AttemptApiService } from 'src/app/core/api/attempt/attempt-api.service';
import {
  TAttempt,
  TAttemptFilters,
} from 'src/app/core/api/attempt/attempt-api.interface';

import { Observable } from 'rxjs';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from '../pagination/abstract-cursor-pageable.interface';

@Injectable()
export class AttemptPaginatedListService extends AbstractCursorPageableFilteredService<
  TAttempt,
  TAttemptFilters
> {
  private _practiceId: string | null = null;

  set practiceId(courseId: string) {
    this._practiceId = courseId;
  }

  constructor(private attemptApiService: AttemptApiService) {
    super(10);
  }

  clearPracticeId(): void {
    this._practiceId = null;
  }

  protected override loadListQuery(
    query: TCursorPageableQuery & Partial<TAttemptFilters>
  ): Observable<TCursorPageable<TAttempt>> {
    if (this._practiceId === null) {
      throw new Error('Practice id is not set');
    }
    return this.attemptApiService.getAttempts(this._practiceId, query);
  }
}
