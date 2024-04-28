import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module'
import { PasswordInputModule } from 'src/app/shared/components/forms/password-input/password-input.module'
import { CheckboxInputModule } from 'src/app/shared/components/forms/checkbox-input/checkbox-input.module'

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
    TextInputModule,
    FormButtonModule,
    PasswordInputModule,
    TextInputModule,
    PasswordInputModule,
    CheckboxInputModule,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
