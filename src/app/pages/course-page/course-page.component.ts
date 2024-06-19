import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoles } from 'src/app/core/role/role.enum';
import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { TCourse } from 'src/app/core/api/course/course-api.interface';
import { PracticeApiService } from 'src/app/core/api/practice/practice-api.service';
import { LoadService } from 'src/app/shared/services/load.service';
import { CoursePaginatedListService } from 'src/app/core/api/practice/practice-paginated-list.service';
import { PARTICIPATION_STATUS } from 'src/app/pages/course-participations-page/course-participations-page.const';
import { EParticipationFilterStatuses } from 'src/app/core/api/participation/participation-api.enum';

import { combineLatest, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [
    CourseApiService,
    CoursePaginatedListService,
    PracticeApiService,
    LoadService,
  ],
})
export class CoursePageComponent implements OnInit {
  course: TCourse | null = null;

  practices$ = this.coursePaginatedListService.list$;
  count$ = this.coursePaginatedListService.count$;
  size$ = this.coursePaginatedListService.size$;

  get isLoading$(): Observable<boolean> {
    return combineLatest(
      this.loadService.isLoading$,
      this.coursePaginatedListService.isLoading$,
      (first, second) => {
        return first || second;
      }
    );
  }

  readonly ERoles = ERoles;
  readonly EFullRoutes = EFullRoutes;

  constructor(
    private loadService: LoadService,
    private courseApiService: CourseApiService,
    private coursePaginatedListService: CoursePaginatedListService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subOnCourse();

    this.coursePaginatedListService.courseId =
      this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];

    this.coursePaginatedListService.updateList();
  }

  subOnCourse(): void {
    this.loadService
      .wrapObservable(
        this.courseApiService.get(
          this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID]
        )
      )
      .subscribe((course) => {
        this.course = course;
      });
  }

  checkRequests(): void {
    this.router.navigate(EFullRoutes.COURSE_PARTICIPATION(this.course!.id), {
      queryParams: {
        [PARTICIPATION_STATUS]: EParticipationFilterStatuses.REQUEST,
      },
    });
  }

  checkParticipations(): void {
    this.router.navigate(EFullRoutes.COURSE_PARTICIPATION(this.course!.id), {
      queryParams: {
        [PARTICIPATION_STATUS]: EParticipationFilterStatuses.PARTICIPANT,
      },
    });
  }

  editCourse(): void {
    this.router.navigate(EFullRoutes.COURSE_EDIT(this.course!.id));
  }

  deleteCourse(): void {
    this.loadService
      .wrapObservable(this.courseApiService.delete(this.course!.id))
      .subscribe(() => {
        this.router.navigate(EFullRoutes.COURSES);
      });
  }

  loadPage(page: number): void {
    this.coursePaginatedListService.updateAtPage(page);
  }
}
