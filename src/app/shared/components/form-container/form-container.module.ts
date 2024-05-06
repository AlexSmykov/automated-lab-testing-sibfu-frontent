import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormContainerComponent } from 'src/app/shared/components/form-container/form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [NzInputModule, NzFormModule],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
