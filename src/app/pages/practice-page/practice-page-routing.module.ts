import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticePageComponent } from 'src/app/pages/practice-page/practice-page.component';
import { EPartialRoutes } from 'src/app/shared/router-paths';

const routes: Routes = [
  {
    path: '',
    component: PracticePageComponent,
  },
  {
    path: EPartialRoutes.PRACTICE_EDIT,
    loadChildren: () =>
      import('src/app/pages/practice-form-page/practice-form-page.module').then(
        (m) => m.PracticeFormPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePageRoutingModule {}
