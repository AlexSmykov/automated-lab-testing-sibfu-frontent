import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';
import { PracticeApiService } from 'src/app/core/api/practice/practice-api.service';
import { TPractice } from 'src/app/core/api/practice/practice-api.interface';
import { DictionaryService } from 'src/app/core/dictionaries/dictionary.service';
import { EDictionaries } from 'src/app/core/dictionaries/dictionary.enum';
import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';
import { ERoles } from 'src/app/core/role/role.enum';
import { LoadService } from 'src/app/shared/services/load.service';
import { TPracticeAnswerFormValue } from 'src/app/pages/practice-page/practice-page.interface';
import { AttemptApiService } from 'src/app/core/api/attempt/attempt-api.service';

import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss'],
  providers: [PracticeApiService, LoadService],
})
export class PracticePageComponent implements OnInit {
  private _practice$ = new BehaviorSubject<TPractice | null>(null);
  practice$ = this._practice$.asObservable();
  private practiceSafe$ = this.practice$.pipe(
    filter((practice): practice is TPractice => !!practice)
  );

  languages = this.dictionaryService.getDictByName(EDictionaries.LANGUAGES);

  practiceId: string =
    this.activatedRoute.snapshot.params[ERoutesIds.PRACTICE_ID];
  private courseId: string =
    this.activatedRoute.snapshot.params[ERoutesIds.COURSE_ID];

  isLoading$ = this.loadService.isLoading$;

  readonly ERoles = ERoles;

  answerFormGroup: TFormGroupValue<TPracticeAnswerFormValue> = this.fb.group({
    language: this.fb.control<number>(
      this.languages[0].id,
      Validators.required
    ),
    code: this.fb.control<string>('', Validators.required),
  });

  get languagesNames$(): Observable<string> {
    return this.practiceSafe$.pipe(
      map((practice) => {
        return practice.languages.map((languages) => languages.name).join(', ');
      })
    );
  }

  constructor(
    private router: Router,
    private loadService: LoadService,
    private fb: NonNullableFormBuilder,
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService,
    private practiceApiService: PracticeApiService,
    private attemptApiService: AttemptApiService
  ) {}

  ngOnInit(): void {
    this.subOnPractice();
  }

  subOnPractice(): void {
    this.loadService
      .wrapObservable(
        this.practiceApiService.get(this.practiceId!).pipe(untilDestroyed(this))
      )
      .subscribe((practice) => {
        this._practice$.next(practice);
      });
  }

  delete(): void {
    this.practiceSafe$
      .pipe(
        untilDestroyed(this),
        switchMap((practice) => {
          return this.practiceApiService.delete(practice.id);
        })
      )
      .subscribe(() => {
        this.router.navigate(EFullRoutes.COURSES_ID(this.courseId!));
      });
  }

  edit(): void {
    this.router.navigate(
      EFullRoutes.PRACTICE_EDIT(this.courseId!, this.practiceId!)
    );
  }

  summary(): void {
    this.router.navigate(
      EFullRoutes.PRACTICE_SUMMARY(this.courseId!, this.practiceId!)
    );
  }

  sendAttempt(): void {
    this.loadService
      .wrapObservable(
        this.attemptApiService.sendAttempt(
          this.practiceId,
          this.answerFormGroup.getRawValue()
        )
      )
      .pipe(untilDestroyed(this))
      .subscribe(() => {});
  }
}
