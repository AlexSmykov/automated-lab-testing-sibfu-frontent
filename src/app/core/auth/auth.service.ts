import { Injectable } from '@angular/core';

import { TokenService } from 'src/app/core/token/token.service';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isAuth$ = new BehaviorSubject<boolean>(!!this.tokenService.token);

  get isAuth$(): Observable<boolean> {
    return this._isAuth$.asObservable();
  }

  get isAuth(): boolean {
    return this._isAuth$.getValue();
  }

  constructor(private tokenService: TokenService) {}
}
