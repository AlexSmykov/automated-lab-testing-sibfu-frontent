import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { IslandModule } from 'src/app/shared/components/island/island.module';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { ImageInputModule } from 'src/app/shared/components/forms/image-input/image-input.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';
import { PracticeFormPageComponent } from 'src/app/pages/practice-form-page/practice-form-page.component';
import { PracticeFormPageRoutingModule } from 'src/app/pages/practice-form-page/practice-form-page-routing.module';
import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module';
import { DateInputModule } from 'src/app/shared/components/forms/date-input/date-input.module';
import { CheckboxInputModule } from 'src/app/shared/components/forms/checkbox-input/checkbox-input.module';
import { NumberInputModule } from 'src/app/shared/components/forms/number-input/number-input.module';
import { MdTextareaInputModule } from 'src/app/shared/components/forms/md-textarea-input/md-textarea-input.module';
import { MultiselectInputModule } from 'src/app/shared/components/forms/multiselect-input/multiselect-input.module';

@NgModule({
  declarations: [PracticeFormPageComponent],
  imports: [
    CommonModule,
    PracticeFormPageRoutingModule,
    IslandModule,
    FormContainerModule,
    TextInputModule,
    ReactiveFormsModule,
    NzUploadModule,
    SvgIconComponent,
    ImageInputModule,
    FormButtonModule,
    TextareaInputModule,
    DateInputModule,
    CheckboxInputModule,
    NumberInputModule,
    NzSelectModule,
    NzSpinModule,
    MdTextareaInputModule,
    MultiselectInputModule,
  ],
  exports: [PracticeFormPageComponent],
})
export class PracticeFormPageModule {}
