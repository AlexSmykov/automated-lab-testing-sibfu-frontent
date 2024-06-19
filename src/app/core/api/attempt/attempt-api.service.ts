import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API_PRACTICE_ID_ATTEMPT } from 'src/app/core/api/api-urls';
import { TAttemptDto } from 'src/app/core/api/attempt/attempt-api.dto';
import {
  TAttempt,
  TAttemptFilters,
  TAttemptPost,
} from 'src/app/core/api/attempt/attempt-api.interface';
import {
  deserializeAttempt,
  serializeAttempt,
} from 'src/app/core/api/attempt/attempt-api.transformer';
import { TCursorPageable } from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';
import { deserializePagination } from 'src/app/core/api/pagination/abstract-cursor-pageable.transformer';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AttemptApiService {
  constructor(private httpClient: HttpClient) {}

  getAttempts(
    practiceId: string,
    query: Partial<TAttemptFilters>
  ): Observable<TCursorPageable<TAttempt>> {
    const params = new HttpParams({ fromObject: query });

    return this.httpClient
      .get<TCursorPageable<TAttemptDto>>(API_PRACTICE_ID_ATTEMPT(practiceId), {
        params: params,
      })
      .pipe(
        map((dto) =>
          deserializePagination(dto, (attemptDto) =>
            deserializeAttempt(attemptDto)
          )
        )
      );
  }

  sendAttempt(practiceId: string, data: TAttemptPost): Observable<string> {
    return this.httpClient.post<string>(
      API_PRACTICE_ID_ATTEMPT(practiceId),
      serializeAttempt(data)
    );
  }
}
