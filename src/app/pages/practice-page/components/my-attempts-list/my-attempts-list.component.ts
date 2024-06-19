import { Component, Input, OnInit } from '@angular/core';

import { AttemptPaginatedListService } from 'src/app/core/api/attempt/attempt-paginated-list.service';

@Component({
  selector: 'app-my-attempts-list',
  templateUrl: './my-attempts-list.component.html',
  styleUrls: ['./my-attempts-list.component.scss'],
  providers: [AttemptPaginatedListService],
})
export class MyAttemptsListComponent implements OnInit {
  @Input({ required: true }) practiceId!: string;

  attempts$ = this.attemptPaginatedListService.list$;
  attemptsPageSize$ = this.attemptPaginatedListService.size$;
  attemptsCount$ = this.attemptPaginatedListService.count$;
  isLoading$ = this.attemptPaginatedListService.isLoading$;

  constructor(
    private attemptPaginatedListService: AttemptPaginatedListService
  ) {}

  ngOnInit(): void {
    this.attemptPaginatedListService.practiceId = this.practiceId;
    this.attemptPaginatedListService.updateList();
  }

  loadAttemptPage(page: number): void {
    this.attemptPaginatedListService.updateAtPage(page);
  }
}
