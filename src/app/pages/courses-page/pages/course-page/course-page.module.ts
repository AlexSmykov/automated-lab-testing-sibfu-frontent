import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePageComponent } from 'src/app/pages/courses-page/pages/course-page/course-page.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CoursesPageItemModule } from 'src/app/pages/courses-page/components/course-item/courses-page-item.module';
import { CoursePageRoutingModule } from 'src/app/pages/courses-page/pages/course-page/course-page-routing.module';
import { CoursePracticeItemModule } from 'src/app/pages/courses-page/pages/course-page/components/course-practice-item/course-practice-item.module';
import { CourseHeaderModule } from 'src/app/pages/courses-page/pages/course-page/components/course-header/course-header.module';

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
