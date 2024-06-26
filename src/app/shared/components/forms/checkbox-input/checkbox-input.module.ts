import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { CheckboxInputComponent } from 'src/app/shared/components/forms/checkbox-input/checkbox-input.component';

@NgModule({
  declarations: [CheckboxInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    CommonModule,
    NzCheckboxModule,
  ],
  exports: [CheckboxInputComponent],
})
export class CheckboxInputModule {}
