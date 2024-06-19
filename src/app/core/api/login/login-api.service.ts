import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_LOGIN } from 'src/app/core/api/api-urls';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { EStorageItems } from 'src/app/core/storage/local-storage.enum';
import {
  deserializeLogin,
  serializeLogin,
} from 'src/app/core/api/login/login-api.transformer';
import { TLoginResponseDto } from 'src/app/core/api/login/login-api.dto';
import {
  TLoginPost,
  TLoginResponse,
} from 'src/app/core/api/login/login-api.interface';

import { map, Observable, tap } from 'rxjs';

@Injectable()
export class LoginApiService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(data: TLoginPost): Observable<TLoginResponse> {
    return this.httpClient
      .post<TLoginResponseDto>(API_LOGIN, serializeLogin(data))
      .pipe(
        map(deserializeLogin),
        tap(() => {
          // Данные для базовой аутентификации
          this.localStorageService.setItem(
            EStorageItems.TOKEN,
            btoa(`${data.login}:${data.password}`)
          );
        })
      );
  }
}
