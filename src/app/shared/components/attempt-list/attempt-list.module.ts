import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

import { AttemptListComponent } from 'src/app/shared/components/attempt-list/attempt-list.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { AttemptStatusNameModule } from 'src/app/shared/pipes/attempt-status-name/attempt-status-name.module';

@NgModule({
  declarations: [AttemptListComponent],
  imports: [
    IslandModule,
    NgForOf,
    NgIf,
    SvgIconComponent,
    DatePipe,
    AttemptStatusNameModule,
    NgClass,
    NgStyle,
  ],
  exports: [AttemptListComponent],
})
export class AttemptListModule {}
