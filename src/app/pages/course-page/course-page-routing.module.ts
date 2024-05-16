import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursePageComponent } from 'src/app/pages/course-page/course-page.component';
import { EPartialRoutes } from 'src/app/shared/router-paths';

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent,
  },
  {
    path: EPartialRoutes.PRACTICE_CREATE,
    loadChildren: () =>
      import('src/app/pages/practice-form-page/practice-form-page.module').then(
        (m) => m.PracticeFormPageModule
      ),
  },
  {
    path: EPartialRoutes.PRACTICES_ID,
    loadChildren: () =>
      import('src/app/pages/practice-page/practice-page.module').then(
        (m) => m.PracticePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {}
