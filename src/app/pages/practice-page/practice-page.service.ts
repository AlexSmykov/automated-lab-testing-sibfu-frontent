import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TCourse } from 'src/app/pages/course-page/course-page.interface';
import { mockCourses } from 'src/app/pages/courses-page/mock-courses';
import { TCourseDto } from 'src/app/pages/course-page/course-page.dto';
import { TPractice } from 'src/app/pages/practice-page/practice-page.interface';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PracticePageService {
  private _practice$ = new BehaviorSubject<TPractice | null>(null);

  get practice$(): Observable<TPractice | null> {
    return this._practice$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  updatePractice(id: string): void {
    // this.httpClient.get<TPracticeDto>('').subscribe((result) => {
    //   this._practice$.next(this.deserialize(result))
    // })

    this._practice$.next(
      mockCourses
        .map((course) => course.practices)
        .flat(1)
        .find((practice) => practice.id === id)!
    );
  }

  private deserialize(dto: TCourseDto): TCourse {
    return {} as TCourse;
  }
}
