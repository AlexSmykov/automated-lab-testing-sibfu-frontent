import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttemptStatusNamePipe } from 'src/app/shared/pipes/attempt-status-name/attempt-status-name.pipe';

@NgModule({
  declarations: [AttemptStatusNamePipe],
  exports: [AttemptStatusNamePipe],
  imports: [CommonModule],
})
export class AttemptStatusNameModule {}
