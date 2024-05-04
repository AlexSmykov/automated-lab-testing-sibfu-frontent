import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import {
  TRegistrationPostDto,
  TRegistrationResponseDto,
} from 'src/app/core/api/registration/registration-api.dto'
import {
  TRegistrationPost,
  TRegistrationResponse,
} from 'src/app/core/api/registration/registration-api.interface'
import { API_REGISTRATIONS } from 'src/app/core/api/api-urls'
import { LocalStorageService } from 'src/app/core/storage/local-storage.service'
import { EStorageItems } from 'src/app/core/storage/local-storage.enum'

import { map, Observable, tap } from 'rxjs'

@Injectable()
export class RegistrationApiService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(data: TRegistrationPost): Observable<TRegistrationResponse> {
    return this.httpClient
      .post<TRegistrationResponseDto>(
        API_REGISTRATIONS,
        RegistrationApiService.serialize(data)
      )
      .pipe(
        map((dto) => RegistrationApiService.deserialize(dto)),
        tap(() => {
          this.localStorageService.setItem(EStorageItems.USERNAME, data.login)
          this.localStorageService.setItem(
            EStorageItems.PASSWORD,
            data.password
          )
        })
      )
  }

  static serialize(data: TRegistrationPost): TRegistrationPostDto {
    return {
      username: data.login,
      display_name: data.fio,
      is_teacher: data.isTeacher,
      email: data.email,
      password: data.password,
    }
  }

  static deserialize(dto: TRegistrationResponseDto): TRegistrationResponse {
    return dto
  }
}
