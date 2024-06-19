import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgIconComponent } from 'angular-svg-icon';

import { FormContainerModule } from 'src/app/shared/components/form-container/form-container.module';
import { TextInputModule } from 'src/app/shared/components/forms/text-input/text-input.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { PracticeSummaryPageComponent } from 'src/app/pages/practice-summary-page/practice-summary-page.component';
import { PracticeSummaryPageRoutingModule } from 'src/app/pages/practice-summary-page/practice-summary-page-routing.module';
import { SummaryAttemptsListModule } from 'src/app/pages/practice-summary-page/components/my-attempts-list/summary-attempts-list.module';

@NgModule({
  declarations: [PracticeSummaryPageComponent],
  imports: [
    CommonModule,
    PracticeSummaryPageRoutingModule,
    ReactiveFormsModule,
    FormContainerModule,
    TextInputModule,
    NzSpinModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    IslandModule,
    SvgIconComponent,
    PaginationModule,
    SummaryAttemptsListModule,
  ],
  exports: [PracticeSummaryPageComponent],
})
export class PracticeSummaryPageModule {}
