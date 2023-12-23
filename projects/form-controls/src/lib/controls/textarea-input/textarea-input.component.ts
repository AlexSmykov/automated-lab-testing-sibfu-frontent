import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ErrorService } from '../../error/error.service'

@Component({
  selector: 'as-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
})
export class TextareaInputComponent {
  @Input({ required: true }) control!: FormControl
  @Input() placeholder?: string
  @Input() maxLength: number = 1000
  @Input() startSizeInLines: number = 4

  publicErrorService = this.errorService

  constructor(private errorService: ErrorService) {}
}
