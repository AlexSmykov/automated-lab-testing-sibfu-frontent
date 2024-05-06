import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NzUploadModule } from 'ng-zorro-antd/upload'
import { SvgIconComponent } from 'angular-svg-icon'

import { CreateCoursePageComponent } from 'src/app/pages/courses-page/pages/create-course-page/create-course-page.component'
import { CreateCoursePageRoutingModule } from 'src/app/pages/courses-page/pages/create-course-page/create-course-page-routing.module'
import { IslandModule } from 'src/app/shared/components/island/island.module'
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module'
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module'
import { ImageInputModule } from 'src/app/shared/components/forms/image-input/image-input.module'
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module'

@NgModule({
  declarations: [CreateCoursePageComponent],
  imports: [
    CommonModule,
    CreateCoursePageRoutingModule,
    IslandModule,
    FormContainerModule,
    TextInputModule,
    ReactiveFormsModule,
    NzUploadModule,
    SvgIconComponent,
    ImageInputModule,
    FormButtonModule,
  ],
  exports: [CreateCoursePageComponent],
})
export class CreateCoursePageModule {}
