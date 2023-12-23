import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { TextareaInputComponent } from './textarea-input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'

@NgModule({
  declarations: [TextareaInputComponent],
  imports: [NzInputModule, ReactiveFormsModule, NzFormModule],
  exports: [TextareaInputComponent],
})
export class TextareaInputModule {}
