import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { LabelWrapperComponent } from './label-wrapper.component'
import { NgIf } from '@angular/common'

@NgModule({
  declarations: [LabelWrapperComponent],
  imports: [NzInputModule, NgIf],
  exports: [LabelWrapperComponent],
})
export class LabelWrapperModule {}
