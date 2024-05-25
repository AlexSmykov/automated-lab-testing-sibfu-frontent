import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API_COURSE_SEARCH } from 'src/app/core/api/api-urls';
import { TSearchedCourse } from 'src/app/core/api/search-course/search-course-api.interface';
import { TSearchedCourseDto } from 'src/app/core/api/search-course/search-course-api.dto';
import { deserializeSearchedCourse } from 'src/app/core/api/search-course/search-course-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class SearchCourseApiService {
  constructor(private httpClient: HttpClient) {}

  searchCourses(search: string): Observable<TSearchedCourse[]> {
    const params = new HttpParams().set('search', search);

    return this.httpClient
      .get<TSearchedCourseDto[]>(API_COURSE_SEARCH, { params: params })
      .pipe(
        map((dto) =>
          dto.map((courseDto) => deserializeSearchedCourse(courseDto))
        )
      );
  }
}
