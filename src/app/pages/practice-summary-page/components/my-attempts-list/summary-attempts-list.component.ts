import { Component, Input, OnInit } from '@angular/core';

import { AttemptSummaryPaginatedListService } from 'src/app/core/api/attempt-summary/attempt-summary-paginated-list.service';

@Component({
  selector: 'app-summary-attempts-list',
  templateUrl: './summary-attempts-list.component.html',
  styleUrls: ['./summary-attempts-list.component.scss'],
  providers: [AttemptSummaryPaginatedListService],
})
export class SummaryAttemptsListComponent implements OnInit {
  @Input({ required: true }) practiceId!: string;

  attempts$ = this.attemptSummaryPaginatedListService.list$;
  attemptsPageSize$ = this.attemptSummaryPaginatedListService.size$;
  attemptsCount$ = this.attemptSummaryPaginatedListService.count$;
  isLoading$ = this.attemptSummaryPaginatedListService.isLoading$;

  constructor(
    private attemptSummaryPaginatedListService: AttemptSummaryPaginatedListService
  ) {}

  ngOnInit(): void {
    this.attemptSummaryPaginatedListService.practiceId = this.practiceId;
    this.attemptSummaryPaginatedListService.updateList();
  }

  loadAttemptPage(page: number): void {
    this.attemptSummaryPaginatedListService.updateAtPage(page);
  }
}
