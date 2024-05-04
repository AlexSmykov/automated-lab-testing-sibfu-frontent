import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { EValidatePatterns } from 'src/app/shared/enum/validate-patterns'
import { addValidator } from 'src/app/shared/utils/form-validators'
import { passwordValidatorFn } from 'src/app/shared/validators/validators'

import { TFormGroupValue } from '../../shared/interfaces/mapped-types.interface'
import { TRegistrationFormValue } from './registration-page.interface'
import { EFullRoutes } from '../../shared/router-paths'

const PASSWORD_FIELD_NAME = 'password'
const PASSWORD_CONFIRM_FIELD_NAME = 'passwordConfirm'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [RegistrationApiService],
})
export class RegistrationPageComponent {
  registrationFormGroup: TFormGroupValue<TRegistrationFormValue> =
    this.fb.group({
      login: this.fb.control('', [Validators.required]),
      fio: this.fb.control('', [
        Validators.required,
        Validators.pattern(EValidatePatterns.FIO.pattern),
      ]),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(EValidatePatterns.EMAIL.pattern),
      ]),
      isTeacher: this.fb.control(false),
      [PASSWORD_FIELD_NAME]: this.fb.control('', [Validators.required]),
      [PASSWORD_CONFIRM_FIELD_NAME]: this.fb.control('', [Validators.required]),
    })

  controls = this.registrationFormGroup.controls
  EFullRoutes = EFullRoutes

  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder,
    private loginPageService: RegistrationPageService
  ) {
    addValidator(
      this.registrationFormGroup,
      passwordValidatorFn,
      PASSWORD_FIELD_NAME,
      PASSWORD_CONFIRM_FIELD_NAME
    )
  }

  onRegistrationClick(): void {
    this.loginPageService.register(this.registrationFormGroup.getRawValue())
  }
}
