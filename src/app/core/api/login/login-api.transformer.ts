import {
  TLoginPostDto,
  TLoginResponseDto,
} from 'src/app/core/api/login/login-api.dto';
import {
  TLoginPost,
  TLoginResponse,
} from 'src/app/core/api/login/login-api.interface';

export function serializeLogin(data: TLoginPost): TLoginPostDto {
  return {
    username: data.login,
    password: data.password,
  };
}

export function deserializeLogin(dto: TLoginResponseDto): TLoginResponse {
  return dto;
}
