import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeSummaryPageComponent } from 'src/app/pages/practice-summary-page/practice-summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeSummaryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeSummaryPageRoutingModule {}
