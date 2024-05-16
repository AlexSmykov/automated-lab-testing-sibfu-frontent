import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPartialRoutes } from 'src/app/shared/router-paths';
import { dictResolver } from 'src/app/core/dictionaries/dictionary.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: EPartialRoutes.MAIN,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.MAIN,
    resolve: [dictResolver],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
