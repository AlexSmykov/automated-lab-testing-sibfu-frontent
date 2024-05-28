import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_PRACTICE_ID_ATTEMPT } from 'src/app/core/api/api-urls';
import { TAttemptDto } from 'src/app/core/api/attempt/attempt-api.dto';
import {
  TAttempt,
  TAttemptPost,
} from 'src/app/core/api/attempt/attempt-api.interface';
import {
  deserializeAttempt,
  serializeAttempt,
} from 'src/app/core/api/attempt/attempt-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class AttemptApiService {
  constructor(private httpClient: HttpClient) {}

  getAttempts(practiceId: string): Observable<TAttempt[]> {
    return this.httpClient
      .get<TAttemptDto[]>(API_PRACTICE_ID_ATTEMPT(practiceId))
      .pipe(map((dto) => dto.map(deserializeAttempt)));
  }

  sendAttempt(practiceId: string, data: TAttemptPost): Observable<string> {
    return this.httpClient.post<string>(
      API_PRACTICE_ID_ATTEMPT(practiceId),
      serializeAttempt(data)
    );
  }
}
