import { NgModule } from '@angular/core';
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
} from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { IslandModule } from 'src/app/shared/components/island/island.module';
import { AttemptStatusNameModule } from 'src/app/shared/pipes/attempt-status-name/attempt-status-name.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { SummaryAttemptsListComponent } from 'src/app/pages/practice-summary-page/components/my-attempts-list/summary-attempts-list.component';

@NgModule({
  declarations: [SummaryAttemptsListComponent],
  imports: [
    IslandModule,
    NgForOf,
    NgIf,
    SvgIconComponent,
    DatePipe,
    AttemptStatusNameModule,
    NgClass,
    NgStyle,
    NzPaginationModule,
    AsyncPipe,
    NzSpinModule,
    PaginationModule,
  ],
  exports: [SummaryAttemptsListComponent],
})
export class SummaryAttemptsListModule {}
