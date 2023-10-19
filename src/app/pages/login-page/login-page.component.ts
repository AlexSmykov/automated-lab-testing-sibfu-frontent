import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

import { TMappedFormControls } from '../../shared/interfaces/mapped-types.interface'
import { TRegistrationData } from './login-page.interface'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginFormGroup: TMappedFormControls<TRegistrationData> = this.fb.group({
    login: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  })

  controls = this.loginFormGroup.controls

  constructor(private fb: NonNullableFormBuilder) {}

  onLoginClick(): void {}
}
