import {
  EParticipationFilterStatuses,
  EParticipationStatuses,
} from 'src/app/core/api/participation/participation-api.enum';

export type TParticipationDto = {
  username: string;
  user_id: string;
  display_name: string;
  email: string;
  is_teacher: boolean;
  is_request: boolean;
};

export type TParticipationUpdateDto = {
  user_id: string;
  status: EParticipationStatuses;
};

export type TParticipationFiltersDto = {
  participation_status: EParticipationFilterStatuses;
};
