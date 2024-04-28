import { Component, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { ErrorService } from 'src/app/shared/services/error.service'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input({ required: true }) control!: FormControl
  @Input() label?: string
  @Input() placeholder?: string
  @Input() maxLength: number = 1000

  get errorText(): string {
    return this.errorService.checkError(this.control)
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  constructor(private errorService: ErrorService) {}
}
