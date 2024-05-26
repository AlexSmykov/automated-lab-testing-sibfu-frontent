import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { EFullRoutes } from 'src/app/shared/router-paths';

import { map, Observable } from 'rxjs';

export function authGuard(url: string): Observable<boolean | UrlTree> {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuth$.pipe(
    map((isAuth) => {
      if (isAuth) {
        return true;
      }
      return router.parseUrl(EFullRoutes.LOGIN.join(''));
    })
  );
}
