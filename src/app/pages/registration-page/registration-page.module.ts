import { NgModule } from '@angular/core'

import {
  LabelWrapperModule,
  PasswordInputModule,
  TextInputModule,
} from 'form-controls'

import { RegistrationPageComponent } from './registration-page.component'
import { RegistrationPageRoutingModule } from './registration-page-routing.module'
import { LogoModule } from '../../components/logo/logo.module'
import { FormContainerModule } from '../../components/form-container/form-container.module'

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    RegistrationPageRoutingModule,
    LogoModule,
    FormContainerModule,
    LabelWrapperModule,
    TextInputModule,
    PasswordInputModule,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
