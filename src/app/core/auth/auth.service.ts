import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable, tap } from 'rxjs'

import { TokenService } from '../token/token.service'
import { TLoginDto, TLoginDtoPost } from '../../pages/login-page/login-page.dto'
import { LOGIN } from '../../shared/api-paths'
import {
  TRegistrationDto,
  TRegistrationDtoPost,
} from '../../pages/registration-page/registration-page.dto'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isAuth$ = new BehaviorSubject<boolean>(!!this.tokenService.token)

  get isAuth$(): Observable<boolean> {
    return this._isAuth$.asObservable()
  }

  get isAuth(): boolean {
    return this._isAuth$.getValue()
  }

  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient
  ) {}

  login(data: TLoginDtoPost): Observable<TLoginDto> {
    return this.httpClient.post<TLoginDto>(LOGIN, data).pipe(
      tap((result) => {
        this.tokenService.setToken(result.token)
      })
    )
  }

  register(data: TRegistrationDtoPost): Observable<TRegistrationDto> {
    return this.httpClient.post<TRegistrationDto>(LOGIN, data).pipe(
      tap((result) => {
        this.tokenService.setToken(result.token)
      })
    )
  }
}
