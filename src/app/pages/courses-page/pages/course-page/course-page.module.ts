import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoursePageComponent } from './course-page.component'
import { IslandModule } from '../../../../shared/components/island/island.module'
import { CoursesPageItemModule } from '../../components/course-item/courses-page-item.module'
import { CoursePageRoutingModule } from './course-page-routing.module'
import { CoursePracticeItemModule } from './components/course-practice-item/course-practice-item.module'
import { CourseHeaderModule } from './components/course-header/course-header.module'

@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    CoursesPageItemModule,
    CoursePageRoutingModule,
    CoursePracticeItemModule,
    CourseHeaderModule,
  ],
  exports: [CoursePageComponent],
})
export class CoursePageModule {}
