import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_COURSE_ID_SEND_PARTICIPATION } from 'src/app/core/api/api-urls';
import { TParticipationDto } from 'src/app/core/api/participation/participation-api.dto';
import { TParticipation } from 'src/app/core/api/participation/participation-api.interface';
import { deserializeParticipation } from 'src/app/core/api/participation/participation-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class ParticipationApiService {
  constructor(private httpClient: HttpClient) {}

  createParticipation(courseId: string): Observable<TParticipation> {
    return this.httpClient
      .get<TParticipationDto>(API_COURSE_ID_SEND_PARTICIPATION(courseId))
      .pipe(map((dto: TParticipationDto) => deserializeParticipation(dto)));
  }
}
