import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

import { EValidatePatterns } from 'src/app/shared/enum/validate-patterns'
import { addValidator } from 'src/app/shared/utils/form-validators'
import { passwordValidatorFn } from 'src/app/shared/validators/validators'

import { TFormGroupValue } from '../../shared/interfaces/mapped-types.interface'
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
  registrationFormGroup: TFormGroupValue<TRegistration> = this.fb.group({
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
    password: this.fb.control('', [Validators.required]),
    passwordConfirm: this.fb.control('', [Validators.required]),
  })

  controls = this.registrationFormGroup.controls
  EFullRoutes = EFullRoutes

  constructor(
    private fb: NonNullableFormBuilder,
    private loginPageService: RegistrationPageService
  ) {
    addValidator(
      this.registrationFormGroup,
      passwordValidatorFn,
      'password',
      'passwordConfirm'
    )
  }

  onRegistrationClick(): void {
    this.loginPageService.register(this.registrationFormGroup.getRawValue())
  }
}
