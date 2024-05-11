import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoles } from 'src/app/core/role/role.enum';
import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { TCourse } from 'src/app/core/api/course/course-api.interface';
import { TPractice } from 'src/app/core/api/practice/practice-api.interface';
import { PracticeApiService } from 'src/app/core/api/practice/practice-api.service';

import { BehaviorSubject, switchMap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [CourseApiService, PracticeApiService],
})
export class CoursePageComponent implements OnInit {
  private _course$ = new BehaviorSubject<TCourse | null>(null);
  private _practices$ = new BehaviorSubject<TPractice[] | null>(null);

  course$ = this._course$.asObservable();
  practices$ = this._practices$.asObservable();

  readonly ERoles = ERoles;
  readonly EFullRoutes = EFullRoutes;

  constructor(
    private courseApiService: CourseApiService,
    private practiceApiService: PracticeApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => {
          const courseId: string = params[ERoutesIds.COURSE_ID];
          return this.courseApiService.get(courseId);
        }),
        switchMap((course) => {
          this._course$.next(course);
          return this.practiceApiService.getByCourse(course.id);
        })
      )
      .subscribe((practices) => {
        this._practices$.next(practices);
      });
  }

  editCourse(): void {
    this.course$.pipe(untilDestroyed(this)).subscribe((course) => {
      this.router.navigate(EFullRoutes.COURSE_EDIT(course?.id!));
    });
  }
}
