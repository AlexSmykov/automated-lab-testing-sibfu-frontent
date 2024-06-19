import { Injectable } from '@angular/core';

import { AbstractCursorPageableFilteredService } from 'src/app/core/api/pagination/abstract-cursor-pageable-filtered.service';
import { PracticeApiService } from 'src/app/core/api/practice/practice-api.service';
import {
  TPractice,
  TPracticeFilters,
} from 'src/app/core/api/practice/practice-api.interface';

import { Observable } from 'rxjs';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from '../pagination/abstract-cursor-pageable.interface';

@Injectable()
export class CoursePaginatedListService extends AbstractCursorPageableFilteredService<
  TPractice,
  TPracticeFilters
> {
  private _courseId: string | null = null;

  set courseId(courseId: string) {
    this._courseId = courseId;
  }

  constructor(private practiceApiService: PracticeApiService) {
    super(11);
  }

  clearCourseId(): void {
    this._courseId = null;
  }

  protected override loadListQuery(
    query: TCursorPageableQuery & Partial<TPracticeFilters>
  ): Observable<TCursorPageable<TPractice>> {
    if (this._courseId === null) {
      throw new Error('Course id is not set');
    }
    return this.practiceApiService.getByCourse(this._courseId, query);
  }
}
