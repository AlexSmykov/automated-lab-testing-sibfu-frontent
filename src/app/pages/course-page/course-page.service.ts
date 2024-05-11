import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { mockCourses } from 'src/app/pages/courses-page/mock-courses';
import { TCourse } from 'src/app/pages/course-page/course-page.interface';
import { TCourseDto } from 'src/app/pages/course-page/course-page.dto';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CoursePageService {
  private _course$ = new BehaviorSubject<TCourse | null>(null);

  get course$(): Observable<TCourse | null> {
    return this._course$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  updateCourse(id: string): void {
    // this.httpClient.get<TCourseDto>('').subscribe((result) => {
    //   this._course$.next(this.deserialize(result))
    // })

    this._course$.next(mockCourses.find((item) => item.id === id)!);
  }

  private deserialize(dto: TCourseDto): TCourse {
    return {} as TCourse;
  }
}
