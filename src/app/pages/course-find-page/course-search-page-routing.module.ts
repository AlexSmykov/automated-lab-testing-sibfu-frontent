import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseSearchPageComponent } from 'src/app/pages/course-find-page/course-search-page.component';

const routes: Routes = [
  {
    path: '',
    component: CourseSearchPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSearchPageRoutingModule {}
