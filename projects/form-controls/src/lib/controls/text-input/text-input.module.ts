import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { TextInputComponent } from './text-input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'

@NgModule({
  declarations: [TextInputComponent],
  imports: [NzInputModule, ReactiveFormsModule, NzFormModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
