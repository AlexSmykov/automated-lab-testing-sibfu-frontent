import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

import { CoursesPageItemComponent } from 'src/app/pages/courses-page/components/course-item/courses-page-item.component';

@NgModule({
  declarations: [CoursesPageItemComponent],
  imports: [CommonModule, NzIconModule, RouterLink, SvgIconComponent],
  exports: [CoursesPageItemComponent],
})
export class CoursesPageItemModule {}
