import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EFullRoutes, EPartialRoutes } from './shared/router-paths'

const routes: Routes = [
  {
    path: '',
    redirectTo: EFullRoutes.LOGIN_PAGE,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.MAIN,
    loadChildren: () =>
      import('./layout/main/main.module').then((m) => m.MainModule),
  },
  {
    path: EPartialRoutes.LOGIN_PAGE,
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
