import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';

import { PasswordInputComponent } from 'src/app/shared/components/forms/password-input/password-input.component';

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    CommonModule,
  ],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
