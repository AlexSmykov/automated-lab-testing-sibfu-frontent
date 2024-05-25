import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseParticipationsPageComponent } from 'src/app/pages/course-participations-page/course-participations-page.component';

const routes: Routes = [
  {
    path: '',
    component: CourseParticipationsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseParticipationsPageRoutingModule {}
