import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { FormContainerComponent } from './form-container.component'

@NgModule({
  declarations: [FormContainerComponent],
  imports: [NzInputModule],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
