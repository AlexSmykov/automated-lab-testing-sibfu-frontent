import { Component, Input } from '@angular/core'

import { TCourse } from './course-item.interface'
import { CourseItemService } from './course-item.service'
import { EFullRoutes } from '../../../../shared/router-paths'

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  providers: [CourseItemService],
})
export class CourseItemComponent {
  @Input({ required: true }) course!: TCourse

  EFullRoutes = EFullRoutes

  constructor(private courseItemService: CourseItemService) {}

  deleteCourse(): void {
    this.courseItemService.deleteCourse(this.course.id).subscribe()
  }
}
