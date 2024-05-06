import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module';
import { PracticePageComponent } from 'src/app/pages/practice-page/practice-page.component';
import { PracticePageRoutingModule } from 'src/app/pages/practice-page/practice-page-routing.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CoursesPageItemModule } from 'src/app/pages/courses-page/components/course-item/courses-page-item.module';
import { CoursePracticeItemModule } from 'src/app/pages/courses-page/pages/course-page/components/course-practice-item/course-practice-item.module';
import { CourseHeaderModule } from 'src/app/pages/courses-page/pages/course-page/components/course-header/course-header.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';

@NgModule({
  declarations: [PracticePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    CoursesPageItemModule,
    PracticePageRoutingModule,
    CoursePracticeItemModule,
    CourseHeaderModule,
    FormButtonModule,
    TextareaInputModule,
  ],
  exports: [PracticePageComponent],
})
export class PracticePageModule {}
