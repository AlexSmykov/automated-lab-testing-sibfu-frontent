import { Injectable } from '@angular/core';

import { TokenService } from 'src/app/core/token/token.service';
import { UserService } from 'src/app/core/user/user.service';

import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth$ = this.tokenService.token$.pipe(map((token) => !!token));

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  logout(): void {
    this.userService.clearUser();
    this.tokenService.clearToken();
  }
}
