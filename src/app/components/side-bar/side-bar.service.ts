import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { TCourse } from 'src/app/core/api/course/course-api.interface';

import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor() {
    this.updateCourses();
  }

  updateCourses(): void {
    this._courses$.next([]);
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
}
