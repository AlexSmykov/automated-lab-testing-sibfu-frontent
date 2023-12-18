import { Component, Input } from '@angular/core'

import { CoursesPageItemService } from './courses-page-item.service'
import { EFullRoutes } from '../../../../shared/router-paths'
import { TCourse } from '../../pages/course-page/course-page.interface'

@Component({
  selector: 'app-courses-page-item',
  templateUrl: './courses-page-item.component.html',
  styleUrls: ['./courses-page-item.component.scss'],
  providers: [CoursesPageItemService],
})
export class CoursesPageItemComponent {
  @Input({ required: true }) course!: TCourse

  EFullRoutes = EFullRoutes

  constructor(private courseItemService: CoursesPageItemService) {}

  deleteCourse(): void {
    this.courseItemService.deleteCourse(this.course.id).subscribe()
  }
}
