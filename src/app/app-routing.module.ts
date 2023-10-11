import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EFullRoutes, EPartialRoutes } from './shared/router-paths'

const routes: Routes = [
  {
    path: '',
    redirectTo: EFullRoutes.REGISTRATION_PAGE,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.MAIN,
    loadChildren: () =>
      import('./layout/main/main.module').then((m) => m.MainModule),
  },
  {
    path: EPartialRoutes.REGISTRATION_PAGE,
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
