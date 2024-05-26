import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TRegistrationResponseDto } from 'src/app/core/api/registration/registration-api.dto';
import {
  TRegistrationPost,
  TRegistrationResponse,
} from 'src/app/core/api/registration/registration-api.interface';
import { API_REGISTRATION } from 'src/app/core/api/api-urls';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import {
  deserializeRegistration,
  serializeRegistration,
} from 'src/app/core/api/registration/registration-api.transformer';

import { map, Observable } from 'rxjs';

@Injectable()
export class RegistrationApiService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(data: TRegistrationPost): Observable<TRegistrationResponse> {
    return this.httpClient
      .post<TRegistrationResponseDto>(
        API_REGISTRATION,
        serializeRegistration(data)
      )
      .pipe(map(deserializeRegistration));
  }
}
