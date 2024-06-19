import {
  TAttemptDto,
  TAttemptPostDto,
} from 'src/app/core/api/attempt/attempt-api.dto';
import {
  TAttempt,
  TAttemptPost,
} from 'src/app/core/api/attempt/attempt-api.interface';

export function serializeAttempt(data: TAttemptPost): TAttemptPostDto {
  return {
    source_code: data.code,
    language_id: data.language,
  };
}

export function deserializeAttempt(dto: TAttemptDto): TAttempt {
  return {
    id: dto.id,
    meta: dto.meta,
    sentTime: new Date(dto.sent_time),
    authorId: dto.author_id,
    languageId: dto.language_id,
    practiceId: dto.practice_id,
    status: dto.status,
  };
}
