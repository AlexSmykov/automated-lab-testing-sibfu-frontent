import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PracticePageComponent } from './practice-page.component'

const routes: Routes = [
  {
    path: '',
    component: PracticePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePageRoutingModule {}
