import { TUserDto } from 'src/app/core/api/user-me/user-api.dto';
import { TUser } from 'src/app/core/api/user-me/user-api.interface';

export function deserializeUser(dto: TUserDto): TUser {
  return {
    username: dto.username,
    displayName: dto.display_name,
    isTeacher: dto.is_teacher,
    email: dto.email,
    id: dto.id,
  };
}
