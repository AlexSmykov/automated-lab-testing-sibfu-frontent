import { EParticipationStatuses } from 'src/app/core/api/participation/participation-api.enum';

export type TParticipation = {
  username: string;
  userId: string;
  displayName: string;
  email: string;
  isTeacher: boolean;
  isRequest: boolean;
};

export type TParticipationUpdate = {
  userId: string;
  status: EParticipationStatuses;
};
