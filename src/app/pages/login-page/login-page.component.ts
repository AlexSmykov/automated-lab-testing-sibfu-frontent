import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';
import { TLogin } from 'src/app/pages/login-page/login-page.interface';
import { EFullRoutes } from 'src/app/shared/router-paths';
import { LoginApiService } from 'src/app/core/api/login/login-api.service';
import { TokenService } from 'src/app/core/token/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginApiService],
})
export class LoginPageComponent {
  loginFormGroup: TFormGroupValue<TLogin> = this.fb.group({
    login: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  controls = this.loginFormGroup.controls;
  EFullRoutes = EFullRoutes;

  constructor(
    private tokenService: TokenService,
    private fb: NonNullableFormBuilder,
    private loginApiService: LoginApiService,
    private nzNotificationService: NzNotificationService,
    private router: Router
  ) {}

  onLoginClick(): void {
    const formValue = this.loginFormGroup.getRawValue();
    this.loginApiService.login(formValue).subscribe({
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
