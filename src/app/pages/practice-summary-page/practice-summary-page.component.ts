import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';

import { LoadService } from 'src/app/shared/services/load.service';
import { ERoutesIds } from 'src/app/shared/router-paths';
import { AttemptSummaryPaginatedListService } from 'src/app/core/api/attempt-summary/attempt-summary-paginated-list.service';

@UntilDestroy()
@Component({
  selector: 'app-practice-summary-page',
  templateUrl: './practice-summary-page.component.html',
  styleUrls: ['./practice-summary-page.component.scss'],
  providers: [LoadService, AttemptSummaryPaginatedListService],
})
export class PracticeSummaryPageComponent {
  practiceId: string =
    this.activatedRoute.snapshot.params[ERoutesIds.PRACTICE_ID];

  constructor(private activatedRoute: ActivatedRoute) {}
}
