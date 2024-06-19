import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_USER_ME } from 'src/app/core/api/api-urls';
import { TUser } from 'src/app/core/api/user-me/user-api.interface';
import { TUserDto } from 'src/app/core/api/user-me/user-api.dto';
import { deserializeUser } from 'src/app/core/api/user-me/user-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  getMe$(): Observable<TUser> {
    return this.httpClient
      .get<TUserDto>(API_USER_ME)
      .pipe(map((dto) => deserializeUser(dto)));
  }
}
