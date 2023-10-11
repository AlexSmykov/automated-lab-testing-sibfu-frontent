import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { PasswordInputComponent } from './password-input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [NzInputModule, ReactiveFormsModule, NzIconModule],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
