import { Component, OnInit } from '@angular/core'

import { CoursesPageService } from './courses-page.service'

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CoursesPageService],
})
export class CoursesPageComponent implements OnInit {
  courses$ = this.homePageService.courses$

  constructor(private homePageService: CoursesPageService) {}

  ngOnInit(): void {
    this.homePageService.getCoursesAction()
  }
}
