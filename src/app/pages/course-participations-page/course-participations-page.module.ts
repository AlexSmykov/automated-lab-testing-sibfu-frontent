import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgIconComponent } from 'angular-svg-icon';

import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { CourseParticipationsPageComponent } from 'src/app/pages/course-participations-page/course-participations-page.component';
import { CourseParticipationsPageRoutingModule } from 'src/app/pages/course-participations-page/course-participations-page-routing.module';

@NgModule({
  declarations: [CourseParticipationsPageComponent],
  imports: [
    CommonModule,
    CourseParticipationsPageRoutingModule,
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
  exports: [CourseParticipationsPageComponent],
})
export class CourseParticipationsPageModule {}
