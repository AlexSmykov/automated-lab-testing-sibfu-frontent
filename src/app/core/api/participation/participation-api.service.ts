import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  API_COURSE_ID_SEND_PARTICIPATION,
  API_COURSE_ID_SEND_PARTICIPATION_UPDATE,
} from 'src/app/core/api/api-urls';
import {
  TParticipationDto,
  TParticipationFiltersDto,
} from 'src/app/core/api/participation/participation-api.dto';
import {
  TParticipation,
  TParticipationFilters,
  TParticipationUpdate,
} from 'src/app/core/api/participation/participation-api.interface';
import {
  deserializeParticipation,
  serializeParticipationUpdate,
} from 'src/app/core/api/participation/participation-api.transformer';
import { TCursorPageable } from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';
import { deserializePagination } from 'src/app/core/api/pagination/abstract-cursor-pageable.transformer';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParticipationApiService {
  constructor(private httpClient: HttpClient) {}

  createParticipation(courseId: string): Observable<void> {
    return this.httpClient.patch<void>(
      API_COURSE_ID_SEND_PARTICIPATION(courseId),
      {}
    );
  }

  getParticipationByCourse(
    courseId: string,
    query: Partial<TParticipationFilters>
  ): Observable<TCursorPageable<TParticipation>> {
    const filtersDto: Partial<TParticipationFiltersDto> = {
      participation_status: query.participationStatus,
    };

    const params = new HttpParams({ fromObject: filtersDto });

    return this.httpClient
      .get<TCursorPageable<TParticipationDto>>(
        API_COURSE_ID_SEND_PARTICIPATION(courseId),
        {
          params: params,
        }
      )
      .pipe(
        map((dto) =>
          deserializePagination(dto, (participationDto) =>
            deserializeParticipation(participationDto)
          )
        )
      );
  }

  updateParticipationByCourse(
    courseId: string,
    data: TParticipationUpdate[]
  ): Observable<void> {
    return this.httpClient.patch<void>(
      API_COURSE_ID_SEND_PARTICIPATION_UPDATE(courseId),
      data.map(serializeParticipationUpdate)
    );
  }
}
