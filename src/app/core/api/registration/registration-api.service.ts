import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  TRegistrationPostDto,
  TRegistrationResponseDto,
} from 'src/app/core/api/registration/registration-api.dto';
import {
  TRegistrationPost,
  TRegistrationResponse,
} from 'src/app/core/api/registration/registration-api.interface';
import { API_REGISTRATIONS } from 'src/app/core/api/api-urls';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { EStorageItems } from 'src/app/core/storage/local-storage.enum';
import { RoleService } from 'src/app/core/role/role.service';
import { ERoles } from 'src/app/core/role/role.enum';

import { map, Observable, tap } from 'rxjs';

@Injectable()
export class RegistrationApiService {
  constructor(
    private httpClient: HttpClient,
    private roleService: RoleService,
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
          // Данные для базовой аутентификации
          this.localStorageService.setItem(EStorageItems.USERNAME, data.login);
          this.localStorageService.setItem(
            EStorageItems.PASSWORD,
            data.password
          );

          // TODO Сделать чтобы роль препода ставилась не сразу, таких пользователей модератор проверяет
          // Устанавливаем нашу роль
          this.roleService.setCurrentRole(
            data.isTeacher ? ERoles.TEACHER : ERoles.STUDENT
          );
        })
      );
  }

  static serialize(data: TRegistrationPost): TRegistrationPostDto {
    return {
      username: data.login,
      display_name: data.fio,
      is_teacher: data.isTeacher,
      email: data.email,
      password: data.password,
    };
  }

  static deserialize(dto: TRegistrationResponseDto): TRegistrationResponse {
    return dto;
  }
}
