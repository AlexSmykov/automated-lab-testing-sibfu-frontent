import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { PasswordInputComponent } from './password-input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzGridModule,
  ],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
