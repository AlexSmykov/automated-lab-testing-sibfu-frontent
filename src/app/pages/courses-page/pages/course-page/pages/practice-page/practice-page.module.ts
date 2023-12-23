import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PracticePageComponent } from './practice-page.component'
import { PracticePageRoutingModule } from './practice-page-routing.module'
import { IslandModule } from '../../../../../../shared/components/island/island.module'
import { CoursesPageItemModule } from '../../../../components/course-item/courses-page-item.module'
import { CoursePracticeItemModule } from '../../components/course-practice-item/course-practice-item.module'
import { CourseHeaderModule } from '../../components/course-header/course-header.module'

@NgModule({
  declarations: [PracticePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    CoursesPageItemModule,
    PracticePageRoutingModule,
    CoursePracticeItemModule,
    CourseHeaderModule,
  ],
  exports: [PracticePageComponent],
})
export class PracticePageModule {}
