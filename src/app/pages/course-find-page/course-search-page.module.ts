import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgIconComponent } from 'angular-svg-icon';

import { CourseSearchPageComponent } from 'src/app/pages/course-find-page/course-search-page.component';
import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { CourseSearchPageRoutingModule } from 'src/app/pages/course-find-page/course-search-page-routing.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';

@NgModule({
  declarations: [CourseSearchPageComponent],
  imports: [
    CommonModule,
    CourseSearchPageRoutingModule,
    ReactiveFormsModule,
    FormContainerModule,
    TextInputModule,
    NzSpinModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    IslandModule,
    SvgIconComponent,
  ],
  exports: [CourseSearchPageComponent],
})
export class CourseSearchPageModule {}
