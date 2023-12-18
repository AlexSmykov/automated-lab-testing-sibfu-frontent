import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { mockCourses } from '../../pages/courses-page/mock-courses'
import { TCourse } from '../../pages/courses-page/pages/course-page/course-page.interface'

@Injectable({ providedIn: 'root' })
export class SideBarService {
  private _courses$ = new BehaviorSubject<TCourse[]>([])
  private _selectedCourseId$ = new BehaviorSubject<number | null>(null)
  private _selectedCoursePracticeId$ = new BehaviorSubject<number | null>(null)

  get courses$(): Observable<TCourse[]> {
    return this._courses$.asObservable()
  }

  get selectedCourseId$(): Observable<number | null> {
    return this._selectedCourseId$.asObservable()
  }

  get selectedCoursePracticeId$(): Observable<number | null> {
    return this._selectedCoursePracticeId$.asObservable()
  }

  constructor(private httpClient: HttpClient) {
    this.selectCourse(1)
    this.selectPractice(2)
    this.updateCourses()
  }

  updateCourses(): void {
    this._courses$.next(mockCourses)

    // this.httpClient.get<TCourse[]>(API_COURSES).subscribe((result) => {
    //   this._courses$.next(result)
    // })
  }

  unselectCourse(): void {
    this._selectedCourseId$.next(null)
    this._selectedCoursePracticeId$.next(null)
  }

  unselectLab(): void {
    this._selectedCoursePracticeId$.next(null)
  }

  selectCourse(id: number): void {
    this._selectedCourseId$.next(id)
  }

  selectPractice(id: number): void {
    this._selectedCoursePracticeId$.next(id)
  }
}
