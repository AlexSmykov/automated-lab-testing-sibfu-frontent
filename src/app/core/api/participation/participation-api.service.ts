import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_COURSE_ID_SEND_PARTICIPATION } from 'src/app/core/api/api-urls';

import { Observable } from 'rxjs';

@Injectable()
export class ParticipationApiService {
  constructor(private httpClient: HttpClient) {}

  sendParticipation(courseId: string): Observable<string> {
    return this.httpClient.get<string>(
      API_COURSE_ID_SEND_PARTICIPATION(courseId)
    );
  }
}
