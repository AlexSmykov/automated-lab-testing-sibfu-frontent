import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CoursePageComponent } from 'src/app/pages/course-page/course-page.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CoursePageRoutingModule } from 'src/app/pages/course-page/course-page-routing.module';
import { CoursePracticeItemModule } from 'src/app/pages/course-page/components/course-practice-item/course-practice-item.module';
import { CourseHeaderModule } from 'src/app/pages/course-page/components/course-header/course-header.module';
import { RequiredRoleModule } from 'src/app/shared/directives/required-role/required-role.module';
import { IntersectionTriggerModule } from 'src/app/shared/components/intersection-trigger/intersection-trigger.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';

@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    CoursePageRoutingModule,
    CoursePracticeItemModule,
    CourseHeaderModule,
    SvgIconComponent,
    RequiredRoleModule,
    NzSpinModule,
    IntersectionTriggerModule,
    NzPaginationModule,
    PaginationModule,
    NzToolTipModule,
  ],
  exports: [CoursePageComponent],
})
export class CoursePageModule {}
