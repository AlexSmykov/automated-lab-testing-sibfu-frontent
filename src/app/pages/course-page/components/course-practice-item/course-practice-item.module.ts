import { NgModule } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { CdkListbox } from '@angular/cdk/listbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

import { CoursePracticeItemComponent } from 'src/app/pages/course-page/components/course-practice-item/course-practice-item.component';

@NgModule({
  declarations: [CoursePracticeItemComponent],
  imports: [NgStyle, CdkListbox, NzIconModule, NgIf, RouterLink],
  exports: [CoursePracticeItemComponent],
})
export class CoursePracticeItemModule {}
