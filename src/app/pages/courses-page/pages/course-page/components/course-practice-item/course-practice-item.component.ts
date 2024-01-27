import { Component, Input } from '@angular/core'

import { EFullRoutes } from '../../../../../../shared/router-paths'
import {
  EPracticeStatus,
  EPracticeStatusColor,
  TPractice,
} from '../../../../../practice-page/practice-page.interface'

@Component({
  selector: 'app-course-practice-item',
  templateUrl: './course-practice-item.component.html',
  styleUrls: ['./course-practice-item.component.scss'],
})
export class CoursePracticeItemComponent {
  @Input({ required: true }) practice!: TPractice

  EFullRoutes = EFullRoutes

  constructor() {}

  getColor(status: EPracticeStatus): string {
    return EPracticeStatusColor[status]
  }
}
