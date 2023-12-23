import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  LabelWrapperModule,
  PasswordInputModule,
  TextInputModule,
} from 'as-form-controls'

import { LoginPageComponent } from './login-page.component'
import { LoginPageRoutingModule } from './login-page-routing.module'
import { FormContainerModule } from '../../shared/components/form-container/form-container.module'
import { RouterLinkModule } from '../../shared/components/router-link/router-link.module'
import { LogoModule } from '../../components/logo/logo.module'
import { FormButtonModule } from '../../shared/components/button/form-button.module'

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
    LabelWrapperModule,
    TextInputModule,
    PasswordInputModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
