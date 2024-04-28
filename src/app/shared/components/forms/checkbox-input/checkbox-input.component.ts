import { Component, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { ErrorService } from 'src/app/shared/services/error.service'

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent {
  @Input({ required: true }) control!: FormControl<boolean>
  @Input() label?: string

  get errorText(): string {
    return this.errorService.checkError(this.control)
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  constructor(private errorService: ErrorService) {}
}
