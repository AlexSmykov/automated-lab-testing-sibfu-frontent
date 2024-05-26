import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { PasswordInputModule } from 'src/app/shared/components/forms/password-input/password-input.module';
import { CheckboxInputModule } from 'src/app/shared/components/forms/checkbox-input/checkbox-input.module';
import { RegistrationPageComponent } from 'src/app/pages/registration-page/registration-page.component';
import { RegistrationPageRoutingModule } from 'src/app/pages/registration-page/registration-page-routing.module';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { RouterLinkModule } from 'src/app/shared/components/router-link/router-link.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';
import { DateInputModule } from 'src/app/shared/components/forms/date-input/date-input.module';

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
    DateInputModule,
    NgIf,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
