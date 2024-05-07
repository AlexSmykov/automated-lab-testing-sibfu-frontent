import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SvgIconComponent } from 'angular-svg-icon';

import { CourseFormPageComponent } from 'src/app/pages/courses-page/pages/create-course-page/course-form-page.component';
import { CourseFormPageRoutingModule } from 'src/app/pages/courses-page/pages/create-course-page/course-form-page-routing.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { ImageInputModule } from 'src/app/shared/components/forms/image-input/image-input.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';

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
  ],
  exports: [CourseFormPageComponent],
})
export class CourseFormPageModule {}
