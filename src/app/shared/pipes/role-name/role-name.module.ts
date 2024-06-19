import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleNamePipe } from 'src/app/shared/pipes/role-name/role-name.pipe';

@NgModule({
  declarations: [RoleNamePipe],
  exports: [RoleNamePipe],
  imports: [CommonModule],
})
export class RoleNameModule {}
