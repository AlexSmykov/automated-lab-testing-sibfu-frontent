import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  API_COURSE_ID_PRACTICE,
  API_PRACTICE_ID,
} from 'src/app/core/api/api-urls';
import {
  deserializePractice,
  serializePracticePost,
  serializePracticeUpdate,
} from 'src/app/core/api/practice/practice-api.transformer';
import {
  TPractice,
  TPracticeFilters,
} from 'src/app/core/api/practice/practice-api.interface';
import { TPracticeDto } from 'src/app/core/api/practice/practice-api.dto';
import { TPracticeFormValueRaw } from 'src/app/pages/practice-form-page/practice-form-page.interface';
import { TCursorPageable } from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';
import { TCursorPageableDto } from 'src/app/core/api/pagination/abstract-cursor-pageable.dto';
import { deserializePagination } from 'src/app/core/api/pagination/abstract-cursor-pageable.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class PracticeApiService {
  constructor(private httpClient: HttpClient) {}

  get(practiceId: string): Observable<TPractice> {
    return this.httpClient
      .get<TPracticeDto>(API_PRACTICE_ID(practiceId))
      .pipe(map((dto) => deserializePractice(dto)));
  }

  getByCourse(
    courseId: string,
    query: TPracticeFilters
  ): Observable<TCursorPageable<TPractice>> {
    const params = new HttpParams({ fromObject: query });

    return this.httpClient
      .get<TCursorPageableDto<TPracticeDto>>(API_COURSE_ID_PRACTICE(courseId), {
        params: params,
      })
      .pipe(
        map((dto) =>
          deserializePagination(dto, (practiceDto) =>
            deserializePractice(practiceDto)
          )
        )
      );
  }

  delete(practiceId: string): Observable<void> {
    return this.httpClient.delete<void>(API_PRACTICE_ID(practiceId));
  }

  create(data: TPracticeFormValueRaw, courseId: string): Observable<TPractice> {
    return this.httpClient
      .post<TPracticeDto>(
        API_COURSE_ID_PRACTICE(courseId),
        serializePracticePost(data)
      )
      .pipe(map((dto) => deserializePractice(dto)));
  }

  update(
    data: TPracticeFormValueRaw,
    practiceId: string
  ): Observable<TPractice> {
    return this.httpClient
      .put<TPracticeDto>(
        API_PRACTICE_ID(practiceId),
        serializePracticeUpdate(data)
      )
      .pipe(map((dto) => deserializePractice(dto)));
  }
}
