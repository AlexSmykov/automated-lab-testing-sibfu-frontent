import { Pipe, PipeTransform } from '@angular/core';

import {
  EAttemptStatuses,
  EAttemptStatusesText,
} from 'src/app/core/api/attempt/attempt-api.enum';

@Pipe({
  name: 'attemptStatusName',
})
export class AttemptStatusNamePipe implements PipeTransform {
  transform(status: EAttemptStatuses): string {
    return EAttemptStatusesText[status];
  }
}
