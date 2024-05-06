import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { mockCourses } from 'src/app/pages/courses-page/mock-courses';
import { TCourse } from 'src/app/pages/courses-page/pages/course-page/course-page.interface';
import { TCourseDto } from 'src/app/pages/courses-page/pages/course-page/course-page.dto';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CoursesPageService {
  private _courses$ = new BehaviorSubject<TCourse[] | null>(null);

  get courses$(): Observable<TCourse[] | null> {
    return this._courses$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  getCoursesAction(): void {
    // this.httpClient.get<TCourseDto[]>('').subscribe((result) => {
    //   this._courses$.next(this.deserialize(result))
    // })
    this._courses$.next(mockCourses);
  }

  private deserialize(dto: TCourseDto[]): TCourse[] {
    return [];
  }
}
