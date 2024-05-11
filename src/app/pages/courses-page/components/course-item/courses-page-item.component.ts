import { Component, Input } from '@angular/core';

import { CoursesPageItemService } from 'src/app/pages/courses-page/components/course-item/courses-page-item.service';
import { EFullRoutes } from 'src/app/shared/router-paths';
import { TCourse } from 'src/app/pages/course-page/course-page.interface';

@Component({
  selector: 'app-courses-page-item',
  templateUrl: './courses-page-item.component.html',
  styleUrls: ['./courses-page-item.component.scss'],
  providers: [CoursesPageItemService],
})
export class CoursesPageItemComponent {
  @Input({ required: true }) course!: TCourse;

  EFullRoutes = EFullRoutes;

  constructor(private courseItemService: CoursesPageItemService) {}

  deleteCourse(): void {
    this.courseItemService.deleteCourse(this.course.id).subscribe();
  }
}
