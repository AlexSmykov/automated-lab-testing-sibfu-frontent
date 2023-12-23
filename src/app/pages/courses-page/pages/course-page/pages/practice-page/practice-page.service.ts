import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { TCourse } from '../../course-page.interface'
import { mockCourses } from '../../../../mock-courses'
import { TCourseDto } from '../../course-page.dto'
import { TPractice } from './practice-page.interface'

@Injectable()
export class PracticePageService {
  private _practice$ = new BehaviorSubject<TPractice | null>(null)

  get practice$(): Observable<TPractice | null> {
    return this._practice$.asObservable()
  }

  constructor(private httpClient: HttpClient) {}

  updatePractice(id: number): void {
    // this.httpClient.get<TPracticeDto>('').subscribe((result) => {
    //   this._practice$.next(this.deserialize(result))
    // })

    this._practice$.next(
      mockCourses
        .map((course) => course.practices)
        .flat(1)
        .find((practice) => practice.id === id)!
    )
  }

  private deserialize(dto: TCourseDto): TCourse {
    return {} as TCourse
  }
}
