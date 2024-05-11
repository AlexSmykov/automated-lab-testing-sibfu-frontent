import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';
import {
  TPracticeFormTestcase,
  TPracticeFormValue,
} from 'src/app/pages/practice-form-page/practice-form-page.interface';
import { futureTimeValidator } from 'src/app/shared/validators/validators';
import { DictionaryService } from 'src/app/core/dictionaries/dictionary.service';
import { EDictionaries } from 'src/app/core/dictionaries/dictionary.enum';
import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';
import { PracticeApiService } from 'src/app/core/api/practice/practice-api.service';

@UntilDestroy()
@Component({
  selector: 'app-practice-form-page',
  templateUrl: './practice-form-page.component.html',
  styleUrls: ['./practice-form-page.component.scss'],
  providers: [PracticeApiService],
})
export class PracticeFormPageComponent implements OnInit {
  createCourseForm: TFormGroupValue<TPracticeFormValue> = this.fb.group({
    name: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    description: this.fb.control<string>('', [Validators.maxLength(4000)]),
    // TODO учтонить, может ли мягкий дедлайн идти после обычного
    // TODO Дедлайны вообще обязательны или нет
    isDeadline: this.fb.control<boolean>(true, []),
    deadline: this.fb.control<Date>(new Date(), [futureTimeValidator]),
    isSoftDeadline: this.fb.control<boolean>(true, []),
    softDeadline: this.fb.control<Date>(new Date(), [futureTimeValidator]),
    languages: this.fb.control<number[]>([], [Validators.required]),
    // TODO уточнить единицы
    memoryLimit: this.fb.control<number>(1024, [Validators.required]),
    timeLimit: this.fb.control<number>(1000, [Validators.required]),
    maxThreads: this.fb.control<number>(1, [Validators.required]),
    isNetworkAvailable: this.fb.control<boolean>(true, []),
    isMultiFileAvailable: this.fb.control<boolean>(true, []),
    commandLineArgs: this.fb.control<string>('', [Validators.maxLength(1000)]),
    tests: this.fb.array<TFormGroupValue<TPracticeFormTestcase>>([]),
  });

  currentDate = new Date();

  languages = this.dictionaryService.getDictByName(EDictionaries.LANGUAGES);

  get testControls(): TFormGroupValue<TPracticeFormTestcase>[] {
    return this.createCourseForm.controls.tests.controls;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private dictionaryService: DictionaryService,
    private practiceApiService: PracticeApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subOnDeadlineCheckboxChanges();
    this.addTest();
  }

  subOnDeadlineCheckboxChanges(): void {
    this.createCourseForm.controls.isDeadline.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.createCourseForm.controls.deadline.enable();
        } else {
          this.createCourseForm.controls.deadline.disable();
        }
      });

    this.createCourseForm.controls.isSoftDeadline.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.createCourseForm.controls.softDeadline.enable();
        } else {
          this.createCourseForm.controls.softDeadline.disable();
        }
      });
  }

  addTest(): void {
    this.createCourseForm.controls.tests.push(
      this.fb.group({
        input: this.fb.control<string>('', [
          Validators.required,
          Validators.maxLength(4000),
        ]),
        output: this.fb.control<string>('', [
          Validators.required,
          Validators.maxLength(4000),
        ]),
        hidden: this.fb.control<boolean>(true, []),
      })
    );
  }

  deleteTest(testIndex: number): void {
    this.createCourseForm.controls.tests.removeAt(testIndex);
  }

  createPractice(): void {
    const courseId: string =
      this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];
    this.practiceApiService
      .create(this.createCourseForm.getRawValue(), courseId)
      .subscribe(() => {
        this.router.navigate(EFullRoutes.PRACTICES(courseId));
      });
  }
}
