import { TAttemptSummary } from 'src/app/core/api/attempt-summary/attempt-summary-api.interface';
import { TAttemptSummaryDto } from 'src/app/core/api/attempt-summary/attempt-summary-api.dto';

export function deserializeAttemptSummary(
  dto: TAttemptSummaryDto
): TAttemptSummary {
  return {
    userId: dto.user_id,
    displayName: dto.display_name,
    accepted: dto.accepted,
  };
}
