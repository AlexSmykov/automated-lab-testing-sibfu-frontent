import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { IslandModule } from 'src/app/shared/components/island/island.module';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { ImageInputModule } from 'src/app/shared/components/forms/image-input/image-input.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';
import { CourseFormPageComponent } from 'src/app/pages/course-form-page/course-form-page.component';
import { CourseFormPageRoutingModule } from 'src/app/pages/course-form-page/course-form-page-routing.module';
import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module';

@NgModule({
  declarations: [CourseFormPageComponent],
  imports: [
    CommonModule,
    CourseFormPageRoutingModule,
    IslandModule,
    FormContainerModule,
    TextInputModule,
    ReactiveFormsModule,
    NzUploadModule,
    SvgIconComponent,
    ImageInputModule,
    FormButtonModule,
    TextareaInputModule,
    NzSpinModule,
  ],
  exports: [CourseFormPageComponent],
})
export class CourseFormPageModule {}
