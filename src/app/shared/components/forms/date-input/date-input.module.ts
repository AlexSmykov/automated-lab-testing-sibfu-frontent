import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';

import { DateInputComponent } from 'src/app/shared/components/forms/date-input/date-input.component';

@NgModule({
  declarations: [DateInputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
  ],
  exports: [DateInputComponent],
})
export class DateInputModule {}
