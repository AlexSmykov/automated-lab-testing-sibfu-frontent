import { NgModule } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SideBarComponent } from './side-bar.component';
import { IslandModule } from '../../shared/components/island/island.module';
import { StatusCircleModule } from '../../shared/components/status-circle/status-circle.module';
import { SideBarCourseModule } from './sibe-bar-course/side-bar-course.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    IslandModule,
    SvgIconComponent,
    CommonModule,
    StatusCircleModule,
    SideBarCourseModule,
    RouterLink,
  ],
  exports: [SideBarComponent],
})
export class SideBarModule {}
