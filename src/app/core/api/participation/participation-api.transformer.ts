import {
  TParticipationDto,
  TParticipationUpdateDto,
} from 'src/app/core/api/participation/participation-api.dto';
import {
  TParticipation,
  TParticipationUpdate,
} from 'src/app/core/api/participation/participation-api.interface';

export function deserializeParticipation(
  dto: TParticipationDto
): TParticipation {
  return {
    username: dto.username,
    displayName: dto.display_name,
    email: dto.email,
    isTeacher: dto.is_teacher,
    isRequest: dto.is_request,
  };
}

export function serializeParticipationUpdate(
  data: TParticipationUpdate
): TParticipationUpdateDto {
  return {
    user_id: data.userId,
    status: data.status,
  };
}
