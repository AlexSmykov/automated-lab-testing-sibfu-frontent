import { Component, OnInit } from '@angular/core'

import { RoleService } from 'src/app/core/role/role.service'
import { EFullRoutes } from 'src/app/shared/router-paths'

import { CoursesPageService } from './courses-page.service'

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CoursesPageService],
})
export class CoursesPageComponent implements OnInit {
  courses$ = this.homePageService.courses$

  isTeacher = this.roleService.isTeacher

  constructor(
    private homePageService: CoursesPageService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.homePageService.getCoursesAction()
  }

  protected readonly EFullRoutes = EFullRoutes
}
