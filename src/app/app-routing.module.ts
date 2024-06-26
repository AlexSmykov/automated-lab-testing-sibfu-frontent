import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPartialRoutes } from 'src/app/shared/router-paths';
import { dictResolver } from 'src/app/core/dictionaries/dictionary.resolver';
import { userResolver } from 'src/app/core/user/user.resolver';
import { authGuard } from 'src/app/core/auth/auth.guard';
import { noAuthGuard } from 'src/app/core/auth/no-auth.guard';

const routes: Routes = [
  {
    path: EPartialRoutes.LOGIN,
    canActivate: [noAuthGuard],
    canMatch: [noAuthGuard],
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: EPartialRoutes.REGISTRATION,
    canActivate: [noAuthGuard],
    canMatch: [noAuthGuard],
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: EPartialRoutes.MAIN,
    resolve: [dictResolver, userResolver],
    canActivate: [authGuard],
    canMatch: [authGuard],
    loadChildren: () =>
      import('./layout/main/main.module').then((m) => m.MainModule),
  },
  {
    path: EPartialRoutes.SERVER_ERROR,
    loadChildren: () =>
      import('./pages/server-error-page/server-error-page.module').then(
        (m) => m.ServerErrorPageModule
      ),
  },
  {
    path: EPartialRoutes.NOT_FOUND,
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: '',
    redirectTo: EPartialRoutes.LOGIN,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: EPartialRoutes.NOT_FOUND, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
