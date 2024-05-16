import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPartialRoutes } from 'src/app/shared/router-paths';
import { MainComponent } from 'src/app/layout/main/main.component';

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
          import('src/app/pages/courses-page/courses-page.module').then(
            (m) => m.CoursesPageModule
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
