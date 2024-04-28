import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CommonModule } from '@angular/common'

import { TextareaInputComponent } from './textarea-input.component'

@NgModule({
  declarations: [TextareaInputComponent],
  imports: [NzInputModule, ReactiveFormsModule, NzFormModule, CommonModule],
  exports: [TextareaInputComponent],
})
export class TextareaInputModule {}
