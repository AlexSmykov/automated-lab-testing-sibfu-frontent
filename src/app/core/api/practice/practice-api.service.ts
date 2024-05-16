import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  API_COURSE_ID_PRACTICE,
  API_PRACTICE_ID,
} from 'src/app/core/api/api-urls';
import {
  deserializePractice,
  serializePracticePost,
  serializePracticeUpdate,
} from 'src/app/core/api/practice/practice-api.transformer';
import { TPractice } from 'src/app/core/api/practice/practice-api.interface';
import { TPracticeDto } from 'src/app/core/api/practice/practice-api.dto';
import { TPracticeFormValueRaw } from 'src/app/pages/practice-form-page/practice-form-page.interface';

import { map, Observable } from 'rxjs';

@Injectable()
export class PracticeApiService {
  constructor(private httpClient: HttpClient) {}

  get(practiceId: string): Observable<TPractice> {
    return this.httpClient
      .get<TPracticeDto>(API_PRACTICE_ID(practiceId))
      .pipe(map((dto) => deserializePractice(dto)));
  }

  getByCourse(courseId: string): Observable<TPractice[]> {
    return this.httpClient
      .get<TPracticeDto[]>(API_COURSE_ID_PRACTICE(courseId))
      .pipe(
        map((dto) => dto.map((practiceDto) => deserializePractice(practiceDto)))
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
