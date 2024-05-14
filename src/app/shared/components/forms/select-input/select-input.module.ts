import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { SelectInputComponent } from 'src/app/shared/components/forms/select-input/select-input.component';

@NgModule({
  declarations: [SelectInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    CommonModule,
    NzSelectModule,
  ],
  exports: [SelectInputComponent],
})
export class SelectInputModule {}
