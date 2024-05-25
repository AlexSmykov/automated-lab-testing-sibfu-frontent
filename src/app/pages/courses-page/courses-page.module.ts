import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { CoursesPageComponent } from 'src/app/pages/courses-page/courses-page.component';
import { CoursesPageItemModule } from 'src/app/pages/courses-page/components/course-item/courses-page-item.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CoursesPageRoutingModule } from 'src/app/pages/courses-page/courses-page-routing.module';
import { RequiredRoleModule } from 'src/app/shared/directives/required-role/required-role.module';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    CoursesPageItemModule,
    IslandModule,
    CoursesPageRoutingModule,
    SvgIconComponent,
    NzSpinModule,
    RequiredRoleModule,
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
