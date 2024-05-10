import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequiredRoleDirective } from 'src/app/shared/directives/required-role/required-role.directive';

@NgModule({
  declarations: [RequiredRoleDirective],
  exports: [RequiredRoleDirective],
  imports: [CommonModule],
})
export class RequiredRoleModule {}
