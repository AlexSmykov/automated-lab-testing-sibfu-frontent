import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  API_COURSE_ID_SEND_PARTICIPATION,
  API_COURSE_ID_SEND_PARTICIPATION_UPDATE,
} from 'src/app/core/api/api-urls';
import { TParticipationDto } from 'src/app/core/api/participation/participation-api.dto';
import {
  TParticipation,
  TParticipationUpdate,
} from 'src/app/core/api/participation/participation-api.interface';
import {
  deserializeParticipation,
  serializeParticipationUpdate,
} from 'src/app/core/api/participation/participation-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class ParticipationApiService {
  constructor(private httpClient: HttpClient) {}

  createParticipation(courseId: string): Observable<TParticipation> {
    return this.httpClient
      .patch<TParticipationDto>(API_COURSE_ID_SEND_PARTICIPATION(courseId), {})
      .pipe(map((dto: TParticipationDto) => deserializeParticipation(dto)));
  }

  getParticipationByCourse(courseId: string): Observable<TParticipation[]> {
    return this.httpClient
      .get<TParticipationDto[]>(API_COURSE_ID_SEND_PARTICIPATION(courseId))
      .pipe(map((dto) => dto.map(deserializeParticipation)));
  }

  updateParticipationByCourse(
    courseId: string,
    data: TParticipationUpdate[]
  ): Observable<TParticipation[]> {
    return this.httpClient
      .patch<TParticipationDto[]>(
        API_COURSE_ID_SEND_PARTICIPATION_UPDATE(courseId),
        data.map(serializeParticipationUpdate)
      )
      .pipe(map((dto) => dto.map(deserializeParticipation)));
  }
}
