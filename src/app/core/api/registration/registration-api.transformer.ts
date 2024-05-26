import {
  TRegistrationPost,
  TRegistrationResponse,
} from 'src/app/core/api/registration/registration-api.interface';
import {
  TRegistrationPostDto,
  TRegistrationResponseDto,
} from 'src/app/core/api/registration/registration-api.dto';

export function serializeRegistration(
  data: TRegistrationPost
): TRegistrationPostDto {
  return {
    username: data.login,
    display_name: data.name + ' ' + data.surname,
    is_teacher: data.isTeacher,
    email: data.email,
    password: data.password,
  };
}

export function deserializeRegistration(
  dto: TRegistrationResponseDto
): TRegistrationResponse {
  return dto;
}
