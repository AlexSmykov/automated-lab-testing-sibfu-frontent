import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { LocalStorageService } from '../storage/local-storage.service'
import { EStorageItems } from '../storage/local-storage.enum'
import { TToken } from './token.interface'

@Injectable({ providedIn: 'root' })
export class TokenService {
  private _token$ = new BehaviorSubject<TToken>(
    this.localStorageService.getItem(EStorageItems.TOKEN)
  )

  get token$(): Observable<TToken> {
    return this._token$.asObservable()
  }

  get token(): TToken {
    return this._token$.getValue()
  }

  setToken(token: TToken): void {
    this._token$.next(token)
    if (token) {
      this.localStorageService.setItem(EStorageItems.TOKEN, token)
    } else {
      this.localStorageService.removeItem(EStorageItems.TOKEN)
    }
  }

  clearToken(): void {
    this.setToken(null)
  }

  constructor(private localStorageService: LocalStorageService) {}
}
