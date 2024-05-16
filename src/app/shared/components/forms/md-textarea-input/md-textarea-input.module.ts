import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { QuillEditorComponent, QuillViewHTMLComponent } from 'ngx-quill';

import { MdTextareaInputComponent } from 'src/app/shared/components/forms/md-textarea-input/md-textarea-input.component';

@NgModule({
  declarations: [MdTextareaInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonModule,
    QuillEditorComponent,
    QuillViewHTMLComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MdTextareaInputComponent],
})
export class MdTextareaInputModule {}
