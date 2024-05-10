import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';

import { TextInputComponent } from './text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [NzInputModule, ReactiveFormsModule, NzFormModule, CommonModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
