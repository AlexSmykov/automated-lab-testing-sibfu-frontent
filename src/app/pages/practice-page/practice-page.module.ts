import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module';
import { PracticePageComponent } from 'src/app/pages/practice-page/practice-page.component';
import { PracticePageRoutingModule } from 'src/app/pages/practice-page/practice-page-routing.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { CheckboxInputModule } from 'src/app/shared/components/forms/checkbox-input/checkbox-input.module';
import { DateInputModule } from 'src/app/shared/components/forms/date-input/date-input.module';
import { SelectInputModule } from 'src/app/shared/components/forms/select-input/select-input.module';
import { RequiredRoleModule } from 'src/app/shared/directives/required-role/required-role.module';

@NgModule({
  declarations: [PracticePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    PracticePageRoutingModule,
    FormButtonModule,
    TextareaInputModule,
    FormContainerModule,
    CheckboxInputModule,
    DateInputModule,
    SelectInputModule,
    RequiredRoleModule,
    QuillViewHTMLComponent,
    SvgIconComponent,
    NzSpinModule,
  ],
  exports: [PracticePageComponent],
})
export class PracticePageModule {}
