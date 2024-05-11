import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, Validators } from '@angular/forms';
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
  createCourseForm: TFormGroupValue<TCourseFormValue> = this.fb.group({
    name: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
      ],
    }),
    description: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
      ],
    }),
    image: this.fb.control<number | null>(null),
  });

  isLoading$ = this.loadService.isLoading$;

  isEdit: boolean = false;
  existenceCourseId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadService: LoadService,
    private activatedRoute: ActivatedRoute,
    private courseApiService: CourseApiService
  ) {}

  ngOnInit(): void {
    this.subOnRouteParams();
  }

  subOnRouteParams(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        const courseId: string = params[ERoutesIds.COURSE_ID];
        this.isEdit = true;

        if (courseId) {
          this.loadService
            .wrapObservable(
              this.courseApiService.get(courseId).pipe(untilDestroyed(this))
            )
            .subscribe((data) => {
              this.createCourseForm.patchValue(data);
              this.existenceCourseId = data.id;
            });
        }
      });
  }

  createOrEditCourse(): void {
    this.isEdit ? this.editCourse() : this.createCourse();
  }

  editCourse(): void {
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
