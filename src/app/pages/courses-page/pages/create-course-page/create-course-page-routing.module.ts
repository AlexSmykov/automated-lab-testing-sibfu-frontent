import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCoursePageComponent } from 'src/app/pages/courses-page/pages/create-course-page/create-course-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCoursePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCoursePageRoutingModule {}
