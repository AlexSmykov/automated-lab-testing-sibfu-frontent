import { Component, OnInit } from '@angular/core'

import { filter } from 'rxjs'

import { CoursePageService } from './course-page.service'
import { SideBarService } from '../../../../components/side-bar/side-bar.service'

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [CoursePageService],
})
export class CoursePageComponent implements OnInit {
  course$ = this.coursePageService.course$

  constructor(
    private coursePageService: CoursePageService,
    private sideBarService: SideBarService
  ) {}

  ngOnInit(): void {
    this.sideBarService.selectedCourseId$
      .pipe(filter((id): id is number => !!id))
      .subscribe((id) => {
        this.coursePageService.updateCourse(id)
      })
  }
}