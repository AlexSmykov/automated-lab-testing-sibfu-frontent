import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticePageComponent } from 'src/app/pages/practice-page/practice-page.component';

const routes: Routes = [
  {
    path: '',
    component: PracticePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePageRoutingModule {}
