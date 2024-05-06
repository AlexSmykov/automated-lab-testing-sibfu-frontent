import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

import { CoursesPageComponent } from 'src/app/pages/courses-page/courses-page.component';
import { CoursesPageItemModule } from 'src/app/pages/courses-page/components/course-item/courses-page-item.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CoursesPageRoutingModule } from 'src/app/pages/courses-page/courses-page-routing.module';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    CoursesPageItemModule,
    IslandModule,
    CoursesPageRoutingModule,
    SvgIconComponent,
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
