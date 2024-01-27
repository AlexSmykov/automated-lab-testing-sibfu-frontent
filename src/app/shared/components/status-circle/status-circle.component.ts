import { Component, Input } from '@angular/core'

import {
  EPracticeStatus,
  EPracticeStatusColor,
} from '../../interfaces/practice-status.interface'

@Component({
  selector: 'app-status-circle',
  templateUrl: './status-circle.component.html',
  styleUrls: ['./status-circle.component.scss'],
})
export class StatusCircleComponent {
  @Input({ required: true }) status!: EPracticeStatus

  getColor(): string {
    return EPracticeStatusColor[this.status]
  }
}
