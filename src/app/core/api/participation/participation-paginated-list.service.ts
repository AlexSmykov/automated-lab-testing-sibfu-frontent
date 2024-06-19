import { Injectable } from '@angular/core';

import { AbstractCursorPageableFilteredService } from 'src/app/core/api/pagination/abstract-cursor-pageable-filtered.service';
import {
  TParticipation,
  TParticipationFilters,
} from 'src/app/core/api/participation/participation-api.interface';
import { ParticipationApiService } from 'src/app/core/api/participation/participation-api.service';

import { Observable } from 'rxjs';

import {
  TCursorPageable,
  TCursorPageableQuery,
} from '../pagination/abstract-cursor-pageable.interface';

@Injectable()
export class ParticipationPaginatedListService extends AbstractCursorPageableFilteredService<
  TParticipation,
  TParticipationFilters
> {
  private _courseId: string | null = null;

  set courseId(courseId: string) {
    this._courseId = courseId;
  }

  constructor(private participationApiService: ParticipationApiService) {
    super(10);
  }

  clearCourseId(): void {
    this._courseId = null;
  }

  protected override loadListQuery(
    query: TCursorPageableQuery & Partial<TParticipationFilters>
  ): Observable<TCursorPageable<TParticipation>> {
    return this.participationApiService.getParticipationByCourse(
      this._courseId!,
      query
    );
  }
}
