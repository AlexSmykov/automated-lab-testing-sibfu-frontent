import { NgModule } from '@angular/core'
import { NgIf, NgStyle } from '@angular/common'
import { CdkListbox } from '@angular/cdk/listbox'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterLink } from '@angular/router'

import { CourseItemComponent } from './course-item.component'

@NgModule({
  declarations: [CourseItemComponent],
  imports: [NgStyle, CdkListbox, NzIconModule, NgIf, RouterLink],
  exports: [CourseItemComponent],
})
export class CourseItemModule {}
