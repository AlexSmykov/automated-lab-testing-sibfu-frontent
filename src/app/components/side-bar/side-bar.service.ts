import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { mockCourses } from 'src/app/pages/courses-page/mock-courses';
import { TCourse } from 'src/app/pages/course-page/course-page.interface';

import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class SideBarService {
  private _courses$ = new BehaviorSubject<TCourse[]>([]);
  private _selectedCourseId$ = new BehaviorSubject<string | null>(null);
  private _selectedCoursePracticeId$ = new BehaviorSubject<string | null>(null);

  get courses$(): Observable<TCourse[]> {
    return this._courses$.asObservable();
  }

  get selectedCourseId$(): Observable<string | null> {
    return this._selectedCourseId$.asObservable();
  }

  get selectedCoursePracticeId$(): Observable<string | null> {
    return this._selectedCoursePracticeId$.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    this.subOnPracticeIdSet();
    this.updateCourses();
  }

  updateCourses(): void {
    this._courses$.next(mockCourses);

    // this.httpClient.get<TCourse[]>(API_COURSES).subscribe((result) => {
    //   this._courses$.next(result)
    // })
  }

  unselectCourse(): void {
    this._selectedCourseId$.next(null);
    this._selectedCoursePracticeId$.next(null);
  }

  unselectPractice(): void {
    this._selectedCoursePracticeId$.next(null);
  }

  selectCourse(id: string): void {
    this._selectedCourseId$.next(id);
  }

  selectPractice(id: string): void {
    this._selectedCoursePracticeId$.next(id);
  }

  subOnPracticeIdSet(): void {
    this._selectedCoursePracticeId$
      .pipe(
        untilDestroyed(this),
        filter((id): id is string => !!id),
        switchMap((id) =>
          this._courses$.pipe(
            map((courses) => {
              return courses.find(
                (course) =>
                  course.practices.find((practice) => practice.id === id)!
              )!;
            })
          )
        )
      )
      .subscribe((course) => {
        this._selectedCourseId$.next(course!.id);
      });
  }
}
