import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { EValidatePatterns } from 'src/app/shared/enum/validate-patterns';
import { addValidator } from 'src/app/shared/utils/form-validators';
import { passwordValidatorFn } from 'src/app/shared/validators/validators';
import { RegistrationApiService } from 'src/app/core/api/registration/registration-api.service';
import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';
import { TRegistrationFormValue } from 'src/app/pages/registration-page/registration-page.interface';
import { EFullRoutes } from 'src/app/shared/router-paths';
import { TokenService } from 'src/app/core/token/token.service';

const PASSWORD_FIELD_NAME = 'password';
const PASSWORD_CONFIRM_FIELD_NAME = 'passwordConfirm';

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
      name: this.fb.control('', [Validators.required]),
      surname: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(EValidatePatterns.EMAIL.pattern),
      ]),
      isTeacher: this.fb.control(false),
      [PASSWORD_FIELD_NAME]: this.fb.control('', [Validators.required]),
      [PASSWORD_CONFIRM_FIELD_NAME]: this.fb.control('', [Validators.required]),
    });

  controls = this.registrationFormGroup.controls;
  EFullRoutes = EFullRoutes;

  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder,
    private tokenService: TokenService,
    private nzNotificationService: NzNotificationService,
    private registrationApiService: RegistrationApiService
  ) {
    addValidator(
      this.registrationFormGroup,
      passwordValidatorFn,
      PASSWORD_FIELD_NAME,
      PASSWORD_CONFIRM_FIELD_NAME
    );
  }

  onRegistrationClick(): void {
    const formValue = this.registrationFormGroup.getRawValue();
    this.registrationApiService.register(formValue).subscribe({
      next: (result) => {
        this.tokenService.setToken(
          btoa(`${formValue.login}:${formValue.password}`)
        );
        this.router.navigate(EFullRoutes.MAIN);
      },
      error: (error) => {
        this.nzNotificationService.error(
          '',
          'Не удалось авторизоваться по текущим данным'
        );
      },
    });
  }
}
