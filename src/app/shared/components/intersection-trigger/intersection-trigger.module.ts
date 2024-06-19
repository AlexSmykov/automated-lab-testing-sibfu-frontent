import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionTriggerComponent } from 'src/app/shared/components/intersection-trigger/intersection-trigger.component';

@NgModule({
  declarations: [IntersectionTriggerComponent],
  imports: [CommonModule],
  exports: [IntersectionTriggerComponent],
})
export class IntersectionTriggerModule {}
