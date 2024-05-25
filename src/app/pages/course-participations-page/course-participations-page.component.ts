import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';

import { LoadService } from 'src/app/shared/services/load.service';
import { SearchCourseApiService } from 'src/app/core/api/search-course/search-course-api.service';
import { ParticipationApiService } from 'src/app/core/api/participation/participation-api.service';
import { TParticipation } from 'src/app/core/api/participation/participation-api.interface';
import { ERoutesIds } from 'src/app/shared/router-paths';
import { EParticipationStatuses } from 'src/app/core/api/participation/participation-api.enum';

import { BehaviorSubject, switchMap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-participations-page',
  templateUrl: './course-participations-page.component.html',
  styleUrls: ['./course-participations-page.component.scss'],
  providers: [SearchCourseApiService, LoadService, ParticipationApiService],
})
export class CourseParticipationsPageComponent implements OnInit {
  private _participations$ = new BehaviorSubject<TParticipation[] | null>(null);
  participations$ = this._participations$.asObservable();

  isLoading$ = this.loadService.isLoading$;
  courseId: string | null = null;

  constructor(
    private participationApiService: ParticipationApiService,
    private activatedRoute: ActivatedRoute,
    private loadService: LoadService
  ) {}

  ngOnInit(): void {
    this.subOnRouteParams();
  }

  subOnRouteParams(): void {
    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => {
          this.courseId = params[ERoutesIds.COURSE_ID];
          return this.loadService.wrapObservable(
            this.participationApiService.getParticipationByCourse(
              this.courseId!
            )
          );
        })
      )
      .subscribe((participations) => {
        this._participations$.next(participations);
      });
  }

  acceptParticipation(userId: string) {
    this.participationApiService
      .updateParticipationByCourse(this.courseId!, [
        {
          userId: userId,
          status: EParticipationStatuses.APPROVE,
        },
      ])
      .subscribe(() => {
        this.removeParticipationFromList(userId);
      });
  }

  declineParticipation(userId: string) {
    this.participationApiService
      .updateParticipationByCourse(this.courseId!, [
        {
          userId: userId,
          status: EParticipationStatuses.REMOVE,
        },
      ])
      .subscribe(() => {
        this.removeParticipationFromList(userId);
      });
  }

  private removeParticipationFromList(userId: string) {
    this._participations$.next(
      this._participations$
        .getValue()!
        .filter((participation) => participation.userId !== userId)
    );
  }
}
