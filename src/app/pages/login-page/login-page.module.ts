import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { PasswordInputModule } from 'src/app/shared/components/forms/password-input/password-input.module';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormContainerModule } from '../../shared/components/form-container/form-container.module';
import { RouterLinkModule } from '../../shared/components/router-link/router-link.module';
import { LogoModule } from '../../components/logo/logo.module';
import { FormButtonModule } from '../../shared/components/button/form-button.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    LoginPageRoutingModule,
    RouterLinkModule,
    FormContainerModule,
    ReactiveFormsModule,
    RouterLinkModule,
    LogoModule,
    FormButtonModule,
    TextInputModule,
    PasswordInputModule,
    TextInputModule,
    PasswordInputModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
