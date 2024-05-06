import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';

import { SideBarCourseComponent } from 'src/app/components/side-bar/sibe-bar-course/side-bar-course.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { StatusCircleModule } from 'src/app/shared/components/status-circle/status-circle.module';

@NgModule({
  declarations: [SideBarCourseComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzImageModule,
    IslandModule,
    StatusCircleModule,
    SvgIconComponent,
    RouterLink,
  ],
  exports: [SideBarCourseComponent],
})
export class SideBarCourseModule {}
