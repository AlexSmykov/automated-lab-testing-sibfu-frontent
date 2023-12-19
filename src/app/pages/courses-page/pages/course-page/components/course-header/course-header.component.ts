import { Component, Input } from '@angular/core'

import { EFullRoutes } from '../../../../../../shared/router-paths'
import { TCourse } from '../../course-page.interface'

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss'],
})
export class CourseHeaderComponent {
  @Input({ required: true }) course!: TCourse

  EFullRoutes = EFullRoutes

  constructor() {}
}
