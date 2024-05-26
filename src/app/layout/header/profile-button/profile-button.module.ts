import { NgModule } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

import { ProfileButtonComponent } from 'src/app/layout/header/profile-button/profile-button.component';
import { RoleNameModule } from 'src/app/shared/pipes/role-name/role-name.module';

@NgModule({
  declarations: [ProfileButtonComponent],
  imports: [NgIf, AsyncPipe, RoleNameModule, SvgIconComponent],
  exports: [ProfileButtonComponent],
})
export class ProfileButtonModule {}
