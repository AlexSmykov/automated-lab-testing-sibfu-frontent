import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

import { TMappedFormControls } from '../../shared/interfaces/mapped-types.interface'
import { TRegistrationData } from './registration-page.interface'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  registrationFormGroup: TMappedFormControls<TRegistrationData> = this.fb.group(
    {
      login: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    }
  )

  controls = this.registrationFormGroup.controls

  constructor(private fb: NonNullableFormBuilder) {}
}
