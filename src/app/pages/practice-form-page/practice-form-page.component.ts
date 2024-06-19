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
import { LoadService } from 'src/app/shared/services/load.service';

@UntilDestroy()
@Component({
  selector: 'app-practice-form-page',
  templateUrl: './practice-form-page.component.html',
  styleUrls: ['./practice-form-page.component.scss'],
  providers: [PracticeApiService, LoadService],
})
export class PracticeFormPageComponent implements OnInit {
  courseId: string = this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];
  practiceId: string | undefined =
    this.activatedRoute.snapshot.params[ERoutesIds.PRACTICE_ID];

  practiceForm: TFormGroupValue<TPracticeFormValue> = this.fb.group({
    name: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    description: this.fb.control<string>('', []),
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
    testcases: this.fb.array<TFormGroupValue<TPracticeFormTestcase>>([]),
  });

  isEdit: boolean = false;

  currentDate = new Date();

  languages = this.dictionaryService.getDictByName(EDictionaries.LANGUAGES);

  isLoading$ = this.loadService.isLoading$;

  get testControls(): TFormGroupValue<TPracticeFormTestcase>[] {
    return this.practiceForm.controls.testcases.controls;
  }

  get backPath(): string[] {
    if (this.practiceId) {
      return EFullRoutes.PRACTICES_ID(this.courseId, this.practiceId);
    }

    return EFullRoutes.COURSES_ID(this.courseId);
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private loadService: LoadService,
    private dictionaryService: DictionaryService,
    private practiceApiService: PracticeApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subOnDeadlineCheckboxChanges();
    this.subOnExistencePractice();

    this.addTest();
  }

  subOnExistencePractice(): void {
    if (this.practiceId) {
      this.isEdit = true;
      this.loadService
        .wrapObservable(
          this.practiceApiService
            .get(this.practiceId!)
            .pipe(untilDestroyed(this))
        )
        .subscribe((practice) => {
          for (let i = 0; i < practice.testcases.length - 1; i++) {
            this.addTest();
          }
          this.practiceForm.patchValue({
            ...practice,
            languages: practice.languages.map((language) => language.id),
          });
        });
    }
  }

  subOnDeadlineCheckboxChanges(): void {
    this.practiceForm.controls.isDeadline.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.practiceForm.controls.deadline.enable();
        } else {
          this.practiceForm.controls.deadline.disable();
        }
      });

    this.practiceForm.controls.isSoftDeadline.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.practiceForm.controls.softDeadline.enable();
        } else {
          this.practiceForm.controls.softDeadline.disable();
        }
      });
  }

  addTest(): void {
    this.practiceForm.controls.testcases.push(
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
    this.practiceForm.controls.testcases.removeAt(testIndex);
  }

  createPractice(): void {
    this.loadService
      .wrapObservable(
        this.practiceApiService
          .create(this.practiceForm.getRawValue(), this.courseId!)
          .pipe(untilDestroyed(this))
      )
      .subscribe(() => {
        this.router.navigate(EFullRoutes.PRACTICES(this.courseId!));
      });
  }

  updatePractice(): void {
    this.loadService
      .wrapObservable(
        this.practiceApiService
          .update(this.practiceForm.getRawValue(), this.practiceId!)
          .pipe(untilDestroyed(this))
      )
      .subscribe(() => {
        this.router.navigate(EFullRoutes.PRACTICES(this.courseId!));
      });
  }
}
