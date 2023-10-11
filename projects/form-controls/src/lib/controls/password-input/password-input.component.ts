import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'as-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input({ required: true }) control!: FormControl
  @Input() placeholder?: string

  isPasswordVisible = true
}
