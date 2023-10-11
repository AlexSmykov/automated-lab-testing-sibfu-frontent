import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { TextInputComponent } from './text-input.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TextInputComponent],
  imports: [NzInputModule, ReactiveFormsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
