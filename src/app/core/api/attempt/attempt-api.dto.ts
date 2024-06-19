import { EAttemptStatuses } from 'src/app/core/api/attempt/attempt-api.enum';

export type TAttemptPostDto = {
  source_code: string;
  language_id: number;
};

export type TAttemptDto = {
  id: string;
  meta: object;
  sent_time: string;
  author_id: string;
  language_id: number;
  practice_id: string;
  status: EAttemptStatuses;
};
