import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API_PRACTICE_ID_SUMMARY } from 'src/app/core/api/api-urls';
import { TAttemptFilters } from 'src/app/core/api/attempt/attempt-api.interface';
import { TCursorPageable } from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';
import { deserializePagination } from 'src/app/core/api/pagination/abstract-cursor-pageable.transformer';
import { TAttemptSummaryDto } from 'src/app/core/api/attempt-summary/attempt-summary-api.dto';
import { TAttemptSummary } from 'src/app/core/api/attempt-summary/attempt-summary-api.interface';
import { deserializeAttemptSummary } from 'src/app/core/api/attempt-summary/attempt-summary-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AttemptSummaryApiService {
  constructor(private httpClient: HttpClient) {}

  getAttemptsSummary(
    practiceId: string,
    query: Partial<TAttemptFilters>
  ): Observable<TCursorPageable<TAttemptSummary>> {
    const params = new HttpParams({ fromObject: query });

    return this.httpClient
      .get<TCursorPageable<TAttemptSummaryDto>>(
        API_PRACTICE_ID_SUMMARY(practiceId),
        {
          params: params,
        }
      )
      .pipe(
        map((dto) =>
          deserializePagination(dto, (attemptSummaryDto) =>
            deserializeAttemptSummary(attemptSummaryDto)
          )
        )
      );
  }
}
