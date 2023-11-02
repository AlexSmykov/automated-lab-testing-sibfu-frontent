import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  @Input() title?: string
}
