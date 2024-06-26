import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';
import { TCourseFormValue } from 'src/app/pages/course-form-page/course-form-page.interface';
import { LoadService } from 'src/app/shared/services/load.service';

@UntilDestroy()
@Component({
  selector: 'app-course-form-page',
  templateUrl: './course-form-page.component.html',
  styleUrls: ['./course-form-page.component.scss'],
  providers: [CourseApiService, LoadService],
})
export class CourseFormPageComponent implements OnInit {
  courseId: string | undefined =
    this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];

  createCourseForm: TFormGroupValue<TCourseFormValue> = this.fb.group({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(400),
    ]),
    description: this.fb.control('', [Validators.maxLength(4000)]),
    imageId: this.fb.control<string>(''),
  });

  isLoading$ = this.loadService.isLoading$;

  isEdit: boolean = false;
  existenceCourseId: string | null = null;

  get backPath(): string[] {
    if (this.courseId) {
      return EFullRoutes.COURSES_ID(this.courseId);
    }

    return EFullRoutes.COURSES;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private loadService: LoadService,
    private activatedRoute: ActivatedRoute,
    private courseApiService: CourseApiService
  ) {}

  ngOnInit(): void {
    this.subOnRouteParams();
  }

  subOnRouteParams(): void {
    if (this.courseId) {
      this.isEdit = true;
      this.loadService
        .wrapObservable(
          this.courseApiService.get(this.courseId).pipe(untilDestroyed(this))
        )
        .subscribe((data) => {
          this.createCourseForm.patchValue(data);
          this.existenceCourseId = data.id;
        });
    }
  }

  updateCourse(): void {
    this.loadService
      .wrapObservable(
        this.courseApiService
          .update(this.createCourseForm.getRawValue(), this.existenceCourseId!)
          .pipe(untilDestroyed(this))
      )
      .subscribe(() => {
        this.router.navigate(EFullRoutes.COURSES);
      });
  }

  createCourse(): void {
    this.loadService
      .wrapObservable(
        this.courseApiService
          .create(this.createCourseForm.getRawValue())
          .pipe(untilDestroyed(this))
      )
      .subscribe(() => {
        this.router.navigate(EFullRoutes.COURSES);
      });
  }
}
