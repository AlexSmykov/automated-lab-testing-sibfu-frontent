import { Component, Input } from '@angular/core';

import { EFullRoutes } from 'src/app/shared/router-paths';
import {
  EPracticeStatus,
  EPracticeStatusColor,
} from 'src/app/shared/interfaces/practice-status.interface';
import { TPractice } from 'src/app/core/api/practice/practice-api.interface';

@Component({
  selector: 'app-course-practice-item',
  templateUrl: './course-practice-item.component.html',
  styleUrls: ['./course-practice-item.component.scss'],
})
export class CoursePracticeItemComponent {
  @Input({ required: true }) practice!: TPractice;
  @Input({ required: true }) courseId!: string;

  EFullRoutes = EFullRoutes;

  constructor() {}

  getColor(status: EPracticeStatus): string {
    return EPracticeStatusColor[status];
  }
}
