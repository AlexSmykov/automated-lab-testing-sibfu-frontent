import { NgModule } from '@angular/core'

import { RegistrationPageComponent } from './registration-page.component'
import { RegistrationPageRoutingModule } from './registration-page-routing.module'

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [RegistrationPageRoutingModule],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
