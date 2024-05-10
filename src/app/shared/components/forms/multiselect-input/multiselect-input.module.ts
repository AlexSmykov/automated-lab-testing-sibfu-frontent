import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { MultiselectInputComponent } from 'src/app/shared/components/forms/multiselect-input/multiselect-input.component';

@NgModule({
  declarations: [MultiselectInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    CommonModule,
    NzSelectModule,
  ],
  exports: [MultiselectInputComponent],
})
export class MultiselectInputModule {}
