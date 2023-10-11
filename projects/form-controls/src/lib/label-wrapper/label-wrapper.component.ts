import { Component, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'as-label-wrapper',
  templateUrl: './label-wrapper.component.html',
  styleUrls: ['./label-wrapper.component.scss'],
})
export class LabelWrapperComponent {
  @Input({ required: true }) control!: FormControl
  @Input() enableErrorText = true
  @Input() title?: string

  Validators = Validators
}
