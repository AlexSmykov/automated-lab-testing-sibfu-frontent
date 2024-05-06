import { Component, Input } from '@angular/core';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { TPractice } from 'src/app/pages/practice-page/practice-page.interface';
import {
  EPracticeStatus,
  EPracticeStatusColor,
} from 'src/app/shared/interfaces/practice-status.interface';

@Component({
  selector: 'app-course-practice-item',
  templateUrl: './course-practice-item.component.html',
  styleUrls: ['./course-practice-item.component.scss'],
})
export class CoursePracticeItemComponent {
  @Input({ required: true }) practice!: TPractice;

  EFullRoutes = EFullRoutes;

  constructor() {}

  getColor(status: EPracticeStatus): string {
    return EPracticeStatusColor[status];
  }
}
