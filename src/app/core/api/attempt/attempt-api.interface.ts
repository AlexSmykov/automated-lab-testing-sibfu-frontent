import { EAttemptStatuses } from 'src/app/core/api/attempt/attempt-api.enum';

export type TAttemptPost = {
  code: string;
  language: number;
};

export type TAttempt = {
  id: string;
  meta: object;
  sentTime: Date;
  authorId: string;
  languageId: number;
  practiceId: string;
  status: EAttemptStatuses;
};

export type TAttemptFilters = {};
