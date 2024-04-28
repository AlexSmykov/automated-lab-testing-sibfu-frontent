import { Component, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { ErrorService } from 'src/app/shared/services/error.service'

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input({ required: true }) control!: FormControl<string>
  @Input() label?: string
  @Input() placeholder?: string

  isPasswordVisible = true

  get errorText(): string {
    return this.errorService.checkError(this.control)
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  constructor(private errorService: ErrorService) {}
}
