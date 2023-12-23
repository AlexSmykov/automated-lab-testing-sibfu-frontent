import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  LabelWrapperModule,
  PasswordInputModule,
  TextInputModule,
} from 'as-form-controls'

import { RegistrationPageComponent } from './registration-page.component'
import { RegistrationPageRoutingModule } from './registration-page-routing.module'
import { FormContainerModule } from '../../shared/components/form-container/form-container.module'
import { RouterLinkModule } from '../../shared/components/router-link/router-link.module'
import { FormButtonModule } from '../../shared/components/button/form-button.module'

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    RegistrationPageRoutingModule,
    RouterLinkModule,
    FormContainerModule,
    ReactiveFormsModule,
    LabelWrapperModule,
    TextInputModule,
    FormButtonModule,
    PasswordInputModule,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
