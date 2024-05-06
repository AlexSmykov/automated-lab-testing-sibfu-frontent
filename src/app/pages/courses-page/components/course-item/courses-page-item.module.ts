import { NgModule } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { CdkListbox } from '@angular/cdk/listbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

import { CoursesPageItemComponent } from './courses-page-item.component';

@NgModule({
  declarations: [CoursesPageItemComponent],
  imports: [NgStyle, CdkListbox, NzIconModule, NgIf, RouterLink],
  exports: [CoursesPageItemComponent],
})
export class CoursesPageItemModule {}
