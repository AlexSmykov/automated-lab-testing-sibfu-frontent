import { Injectable } from '@angular/core';

import { AbstractCursorPageableFilteredService } from 'src/app/core/api/pagination/abstract-cursor-pageable-filtered.service';
import { AttemptSummaryApiService } from 'src/app/core/api/attempt-summary/attempt-summary-api.service';
import {
  TAttemptSummary,
  TAttemptSummaryFilters,
} from 'src/app/core/api/attempt-summary/attempt-summary-api.interface';

import { Observable } from 'rxjs';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from '../pagination/abstract-cursor-pageable.interface';

@Injectable()
export class AttemptSummaryPaginatedListService extends AbstractCursorPageableFilteredService<
  TAttemptSummary,
  TAttemptSummaryFilters
> {
  private _practiceId: string | null = null;

  set practiceId(courseId: string) {
    this._practiceId = courseId;
  }

  constructor(private attemptSummaryApiService: AttemptSummaryApiService) {
    super(10);
  }

  clearPracticeId(): void {
    this._practiceId = null;
  }

  protected override loadListQuery(
    query: TCursorPageableQuery & Partial<TAttemptSummaryFilters>
  ): Observable<TCursorPageable<TAttemptSummary>> {
    if (this._practiceId === null) {
      throw new Error('Practice id is not set');
    }
    return this.attemptSummaryApiService.getAttemptsSummary(
      this._practiceId,
      query
    );
  }
}
