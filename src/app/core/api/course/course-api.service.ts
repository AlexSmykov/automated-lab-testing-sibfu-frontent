import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_COURSE, API_COURSE_ID } from 'src/app/core/api/api-urls';
import {
  TCourse,
  TCoursePost,
  TCourseUpdate,
} from 'src/app/core/api/course/course-api.interface';
import { TCourseDto } from 'src/app/core/api/course/course-api.dto';
import {
  deserializeCourse,
  serializeCoursePost,
  serializeCourseUpdate,
} from 'src/app/core/api/course/course-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class CourseApiService {
  constructor(private httpClient: HttpClient) {}

  get(courseId: string): Observable<TCourse> {
    return this.httpClient
      .get<TCourseDto>(API_COURSE_ID(courseId))
      .pipe(map((dto) => deserializeCourse(dto)));
  }

  delete(courseId: string): Observable<void> {
    return this.httpClient.delete<void>(API_COURSE_ID(courseId));
  }

  create(data: TCoursePost): Observable<TCourse> {
    return this.httpClient
      .post<TCourseDto>(API_COURSE, serializeCoursePost(data))
      .pipe(map((dto) => deserializeCourse(dto)));
  }

  update(data: TCourseUpdate, courseId: string): Observable<TCourse> {
    return this.httpClient
      .put<TCourseDto>(API_COURSE_ID(courseId), serializeCourseUpdate(data))
      .pipe(map((dto) => deserializeCourse(dto)));
  }
}
