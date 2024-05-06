import { Component } from '@angular/core'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface'
import { TNewCourse } from 'src/app/pages/courses-page/pages/create-course-page/create-course-page.interface'
import { CourseApiService } from 'src/app/core/api/course/course-api.service'
import { EFullRoutes } from 'src/app/shared/router-paths'

@UntilDestroy()
@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.scss'],
  providers: [CourseApiService],
})
export class CreateCoursePageComponent {
  createCourseForm: TFormGroupValue<TNewCourse> = this.fb.group({
    name: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
      ],
    }),
    image: this.fb.control<number | null>(null),
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private courseApiService: CourseApiService
  ) {}

  createCourse(): void {
    this.courseApiService
      .create(this.createCourseForm.getRawValue())
      .subscribe(() => {
        this.router.navigate(EFullRoutes.COURSES)
      })
  }
}
