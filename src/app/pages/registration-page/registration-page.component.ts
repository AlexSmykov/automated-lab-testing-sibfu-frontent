import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

import { TMappedFormControls } from '../../shared/interfaces/mapped-types.interface'
import { TRegistration } from './registration-page.interface'
import { RegistrationPageService } from './registration-page.service'
import { EFullRoutes } from '../../shared/router-paths'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [RegistrationPageService],
})
export class RegistrationPageComponent {
  registrationFormGroup: TMappedFormControls<TRegistration> = this.fb.group({
    login: this.fb.control('', [Validators.required]),
    fio: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    passwordConfirm: this.fb.control('', [Validators.required]),
  })

  controls = this.registrationFormGroup.controls

  constructor(
    private fb: NonNullableFormBuilder,
    private loginPageService: RegistrationPageService
  ) {}

  onRegistrationClick(): void {
    this.loginPageService.register(this.registrationFormGroup.getRawValue())
  }

  protected readonly EFullRoutes = EFullRoutes
}
