import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EPartialRoutes } from './shared/router-paths'

const routes: Routes = [
  {
    path: '',
    redirectTo: EPartialRoutes.LOGIN,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.MAIN,
    loadChildren: () =>
      import('./layout/main/main.module').then((m) => m.MainModule),
  },
  {
    path: EPartialRoutes.LOGIN,
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: EPartialRoutes.REGISTRATION,
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: EPartialRoutes.HOME_PAGE,
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
