import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeFormPageComponent } from 'src/app/pages/practice-form-page/practice-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeFormPageRoutingModule {}
