import { Component, Input } from '@angular/core';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { TCourse } from 'src/app/core/api/course/course-api.interface';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss'],
})
export class CourseHeaderComponent {
  @Input({ required: true }) course!: TCourse;

  EFullRoutes = EFullRoutes;

  constructor() {}
}
