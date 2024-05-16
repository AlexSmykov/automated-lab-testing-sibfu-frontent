import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormPageComponent } from 'src/app/pages/course-form-page/course-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: CourseFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseFormPageRoutingModule {}
