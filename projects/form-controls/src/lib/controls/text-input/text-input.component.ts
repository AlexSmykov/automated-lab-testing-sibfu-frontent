import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ErrorService } from '../../error/error.service'

@Component({
  selector: 'as-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input({ required: true }) control!: FormControl
  @Input() placeholder?: string
  @Input() maxLength: number = 1000

  publicErrorService = this.errorService

  constructor(private errorService: ErrorService) {}
}
