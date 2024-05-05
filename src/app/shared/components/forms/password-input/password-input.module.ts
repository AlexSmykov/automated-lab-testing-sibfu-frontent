import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { ReactiveFormsModule } from '@angular/forms'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CommonModule } from '@angular/common'
import { NzUploadModule } from 'ng-zorro-antd/upload'

import { PasswordInputComponent } from './password-input.component'

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzGridModule,
    CommonModule,
    NzUploadModule,
  ],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
