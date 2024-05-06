import { NgModule } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { CdkListbox } from '@angular/cdk/listbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

import { CourseHeaderComponent } from './course-header.component';

@NgModule({
  declarations: [CourseHeaderComponent],
  imports: [NgStyle, CdkListbox, NzIconModule, NgIf, RouterLink],
  exports: [CourseHeaderComponent],
})
export class CourseHeaderModule {}
