import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [NzInputModule, NzFormModule],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
