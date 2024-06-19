import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';

import { LoadService } from 'src/app/shared/services/load.service';
import { ParticipationApiService } from 'src/app/core/api/participation/participation-api.service';
import { ERoutesIds } from 'src/app/shared/router-paths';
import {
  EParticipationFilterDescription,
  EParticipationFilterStatuses,
  EParticipationStatuses,
} from 'src/app/core/api/participation/participation-api.enum';
import { ParticipationPaginatedListService } from 'src/app/core/api/participation/participation-paginated-list.service';
import { PARTICIPATION_STATUS } from 'src/app/pages/course-participations-page/course-participations-page.const';

import { combineLatest, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-participations-page',
  templateUrl: './course-participations-page.component.html',
  styleUrls: ['./course-participations-page.component.scss'],
  providers: [LoadService, ParticipationPaginatedListService],
})
export class CourseParticipationsPageComponent implements OnInit {
  courseId: string = this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];
  participationStatus: EParticipationFilterStatuses =
    this.activatedRoute.snapshot.queryParams[PARTICIPATION_STATUS];

  participations$ = this.participationPaginatedListService.list$;
  count$ = this.participationPaginatedListService.count$;
  size$ = this.participationPaginatedListService.size$;

  EParticipationFilterDescription = EParticipationFilterDescription;
  EParticipationFilterStatuses = EParticipationFilterStatuses;

  get isLoading$(): Observable<boolean> {
    return combineLatest(
      this.loadService.isLoading$,
      this.participationPaginatedListService.isLoading$,
      (first, second) => {
        return first || second;
      }
    );
  }

  constructor(
    private participationPaginatedListService: ParticipationPaginatedListService,
    private participationApiService: ParticipationApiService,
    private activatedRoute: ActivatedRoute,
    private loadService: LoadService
  ) {}

  ngOnInit(): void {
    this.participationPaginatedListService.courseId = this.courseId;
    this.participationPaginatedListService.setQueryParam(
      'participationStatus',
      this.participationStatus
    );
    this.participationPaginatedListService.updateList();
  }

  acceptParticipation(userId: string) {
    this.loadService
      .wrapObservable(
        this.participationApiService.updateParticipationByCourse(
          this.courseId!,
          [
            {
              userId: userId,
              status: EParticipationStatuses.APPROVE,
            },
          ]
        )
      )
      .subscribe(() => {
        this.participationPaginatedListService.updateCurrentPage();
      });
  }

  declineParticipation(userId: string) {
    this.loadService
      .wrapObservable(
        this.participationApiService.updateParticipationByCourse(
          this.courseId!,
          [
            {
              userId: userId,
              status: EParticipationStatuses.REMOVE,
            },
          ]
        )
      )
      .subscribe(() => {
        this.participationPaginatedListService.updateCurrentPage();
      });
  }

  loadPage(page: number): void {
    this.participationPaginatedListService.updateAtPage(page);
  }
}
