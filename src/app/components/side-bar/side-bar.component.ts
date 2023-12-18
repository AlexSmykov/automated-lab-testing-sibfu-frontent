import { Component } from '@angular/core'

import { SideBarService } from './side-bar.service'
import { EFullRoutes } from '../../shared/router-paths'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  courses$ = this.sideBarService.courses$
  courseId$ = this.sideBarService.selectedCourseId$
  practiceId$ = this.sideBarService.selectedCoursePracticeId$

  constructor(private sideBarService: SideBarService) {}

  protected readonly EFullRoutes = EFullRoutes
}
