import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { NumberInputComponent } from 'src/app/shared/components/forms/number-input/number-input.component';

@NgModule({
  declarations: [NumberInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonModule,
    NzInputNumberModule,
  ],
  exports: [NumberInputComponent],
})
export class NumberInputModule {}
