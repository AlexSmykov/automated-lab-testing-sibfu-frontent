import { Component } from '@angular/core'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormBuilder, Validators } from '@angular/forms'

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface'
import { TNewCourse } from 'src/app/pages/courses-page/pages/create-course-page/create-course-page.interface'

@UntilDestroy()
@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.scss'],
})
export class CreateCoursePageComponent {
  createCourseForm: TFormGroupValue<TNewCourse> = this.fb.group({
    title: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
      ],
    }),
    image: this.fb.control<number | null>(null),
  })

  constructor(private fb: FormBuilder) {}
}
