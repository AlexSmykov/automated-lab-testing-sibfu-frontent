import { NgModule } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { StatusCircleModule } from 'src/app/shared/components/status-circle/status-circle.module';
import { SideBarCourseModule } from 'src/app/components/side-bar/sibe-bar-course/side-bar-course.module';

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
