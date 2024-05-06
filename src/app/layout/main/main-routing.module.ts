import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPartialRoutes } from '../../shared/router-paths';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: EPartialRoutes.COURSES,
        pathMatch: 'full',
      },
      {
        path: EPartialRoutes.COURSES,
        loadChildren: () =>
          import('../../pages/courses-page/courses-page.module').then(
            (m) => m.CoursesPageModule
          ),
      },
      {
        path: EPartialRoutes.PRACTICE,
        loadChildren: () =>
          import('../../pages/practice-page/practice-page.module').then(
            (m) => m.PracticePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
