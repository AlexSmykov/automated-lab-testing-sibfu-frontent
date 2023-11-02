import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import {
  LabelWrapperModule,
  PasswordInputModule,
  TextInputModule,
} from 'form-controls'

import { LoginPageComponent } from './login-page.component'
import { LoginPageRoutingModule } from './login-page-routing.module'
import { FormContainerModule } from '../../shared/components/form-container/form-container.module'
import { RouterLinkModule } from '../../shared/components/router-link/router-link.module'
import { LogoModule } from '../../components/logo/logo.module'
import { ButtonModule } from '../../shared/components/button/button.module'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    LoginPageRoutingModule,
    RouterLinkModule,
    FormContainerModule,
    ReactiveFormsModule,
    LabelWrapperModule,
    TextInputModule,
    PasswordInputModule,
    RouterLinkModule,
    LogoModule,
    ButtonModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
