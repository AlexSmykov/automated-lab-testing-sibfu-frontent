import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageItemModule } from './components/course-item/courses-page-item.module';
import { IslandModule } from '../../shared/components/island/island.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';

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
