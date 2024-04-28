import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module'

import { PracticePageComponent } from './practice-page.component'
import { PracticePageRoutingModule } from './practice-page-routing.module'
import { IslandModule } from '../../shared/components/island/island.module'
import { CoursesPageItemModule } from '../courses-page/components/course-item/courses-page-item.module'
import { CoursePracticeItemModule } from '../courses-page/pages/course-page/components/course-practice-item/course-practice-item.module'
import { CourseHeaderModule } from '../courses-page/pages/course-page/components/course-header/course-header.module'
import { FormButtonModule } from '../../shared/components/button/form-button.module'

@NgModule({
  declarations: [PracticePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    CoursesPageItemModule,
    PracticePageRoutingModule,
    CoursePracticeItemModule,
    CourseHeaderModule,
    FormButtonModule,
    TextareaInputModule,
  ],
  exports: [PracticePageComponent],
})
export class PracticePageModule {}
