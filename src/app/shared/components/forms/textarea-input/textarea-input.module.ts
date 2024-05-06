import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CommonModule } from '@angular/common'
import { NzUploadModule } from 'ng-zorro-antd/upload'

import { TextareaInputComponent } from './textarea-input.component'

@NgModule({
  declarations: [TextareaInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonModule,
    NzUploadModule,
  ],
  exports: [TextareaInputComponent],
})
export class TextareaInputModule {}
