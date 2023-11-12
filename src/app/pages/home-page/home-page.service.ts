import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { TCourse } from './components/course-item/course-item.interface'
import { TCourseDto } from './home-page.dto'

@Injectable()
export class HomePageService {
  private _courses$ = new BehaviorSubject<TCourse[] | null>(null)

  get courses$(): Observable<TCourse[] | null> {
    return this._courses$.asObservable()
  }

  constructor(private httpClient: HttpClient) {}

  getCoursesAction(): void {
    // this.httpClient.get<TCourseDto[]>('').subscribe((result) => {
    //   this._courses$.next(this.deserialize(result))
    // })
    this._courses$.next([
      {
        id: 1,
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/000/695/850/non_2x/digital-technology-concept-vector.jpg',
        name: 'Long name Long name Long name Long name Long name Long name Long name ',
        deletable: true,
      },
      {
        id: 1,
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/000/695/850/non_2x/digital-technology-concept-vector.jpg',
        name: 'Course',
        deletable: true,
      },
      {
        id: 1,
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/000/695/850/non_2x/digital-technology-concept-vector.jpg',
        name: 'Course',
        deletable: true,
      },
    ])
  }

  private deserialize(dto: TCourseDto): TCourse[] {
    return []
  }
}
