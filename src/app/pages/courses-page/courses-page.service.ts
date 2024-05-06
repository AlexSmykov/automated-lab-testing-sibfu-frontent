import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { mockCourses } from './mock-courses';
import { TCourse } from './pages/course-page/course-page.interface';
import { TCourseDto } from './pages/course-page/course-page.dto';

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
