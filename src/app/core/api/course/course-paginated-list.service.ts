import { Injectable } from '@angular/core';

import {
  TCourse,
  TCourseFilters,
} from 'src/app/core/api/course/course-api.interface';
import { AbstractCursorPageableFilteredService } from 'src/app/core/api/pagination/abstract-cursor-pageable-filtered.service';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';

import { Observable } from 'rxjs';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from '../pagination/abstract-cursor-pageable.interface';

@Injectable()
export class CoursePaginatedListService extends AbstractCursorPageableFilteredService<
  TCourse,
  TCourseFilters
> {
  constructor(private courseApiService: CourseApiService) {
    super(10);
  }

  protected override loadListQuery(
    query: TCursorPageableQuery & Partial<TCourseFilters>
  ): Observable<TCursorPageable<TCourse>> {
    return this.courseApiService.getAll(query);
  }
}
