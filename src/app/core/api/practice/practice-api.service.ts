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

  get(id: number): Observable<TPractice> {
    return this.httpClient
      .get<TPracticeDto>(API_PRACTICE_ID(id))
      .pipe(map((dto) => deserializePractice(dto)));
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(API_PRACTICE_ID(id));
  }

  create(data: TPracticeFormValueRaw, courseId: string): Observable<TPractice> {
    return this.httpClient
      .post<TPracticeDto>(
        API_COURSE_ID_PRACTICE(courseId),
        serializePracticePost(data)
      )
      .pipe(map((dto) => deserializePractice(dto)));
  }

  update(data: TPracticeFormValueRaw, id: number): Observable<TPractice> {
    return this.httpClient
      .put<TPracticeDto>(API_PRACTICE_ID(id), serializePracticeUpdate(data))
      .pipe(map((dto) => deserializePractice(dto)));
  }
}
