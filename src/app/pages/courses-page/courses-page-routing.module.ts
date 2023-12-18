import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CoursesPageComponent } from './courses-page.component'

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
