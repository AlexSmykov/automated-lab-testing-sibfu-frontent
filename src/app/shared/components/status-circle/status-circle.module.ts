import { NgModule } from '@angular/core'
import { NgStyle } from '@angular/common'

import { StatusCircleComponent } from './status-circle.component'

@NgModule({
  declarations: [StatusCircleComponent],
  imports: [NgStyle],
  exports: [StatusCircleComponent],
})
export class StatusCircleModule {}
