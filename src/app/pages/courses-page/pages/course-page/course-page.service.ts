import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { mockCourses } from '../../mock-courses'
import { TCourse } from './course-page.interface'
import { TCourseDto } from './course-page.dto'

@Injectable()
export class CoursePageService {
  private _course$ = new BehaviorSubject<TCourse | null>(null)

  get course$(): Observable<TCourse | null> {
    return this._course$.asObservable()
  }

  constructor(private httpClient: HttpClient) {}

  updateCourse(id: number): void {
    // this.httpClient.get<TCourseDto>('').subscribe((result) => {
    //   this._course$.next(this.deserialize(result))
    // })

    this._course$.next(mockCourses.find((item) => item.id === id)!)
  }

  private deserialize(dto: TCourseDto): TCourse {
    return {} as TCourse
  }
}
