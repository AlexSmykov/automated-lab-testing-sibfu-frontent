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
import { TPracticeAnswerFormValue } from 'src/app/pages/practice-page/practice-page.interface';
import { ERoles } from 'src/app/core/role/role.enum';

import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  switchMap,
  take,
} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss'],
  providers: [PracticeApiService],
})
export class PracticePageComponent implements OnInit {
  private _practice$ = new BehaviorSubject<TPractice | null>(null);

  practice$ = this._practice$.asObservable();
  private practiceSafe$ = this.practice$.pipe(
    filter((practice): practice is TPractice => !!practice)
  );

  languages = this.dictionaryService.getDictByName(EDictionaries.LANGUAGES);

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
    private practiceApiService: PracticeApiService,
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => {
          const practiceId: string = params[ERoutesIds.PRACTICE_ID];
          return this.practiceApiService.get(practiceId);
        }),
        take(1)
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
      .subscribe();
  }

  edit(): void {
    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => {
          const courseId: string = params[ERoutesIds.COURSE_ID];
          const practiceId: string = params[ERoutesIds.PRACTICE_ID];
          return this.router.navigate(
            EFullRoutes.PRACTICE_EDIT(courseId, practiceId)
          );
        }),
        take(1)
      )
      .subscribe();
  }

  protected readonly ERoles = ERoles;
}
