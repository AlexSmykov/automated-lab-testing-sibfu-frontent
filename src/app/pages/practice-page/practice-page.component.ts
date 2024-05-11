import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import { PracticePageService } from 'src/app/pages/practice-page/practice-page.service';
import { SideBarService } from 'src/app/components/side-bar/side-bar.service';
import { ERoutesIds } from 'src/app/shared/router-paths';

@UntilDestroy()
@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss'],
  providers: [PracticePageService],
})
export class PracticePageComponent implements OnInit {
  practice$ = this.practicePageService.practice$;

  codeInputControl: FormControl<string> = this.fb.control<string>(
    '',
    Validators.required
  );

  constructor(
    private practicePageService: PracticePageService,
    private sideBarService: SideBarService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        const courseId: string = params[ERoutesIds.COURSE_ID];
        this.practicePageService.updatePractice(courseId);
        this.sideBarService.selectPractice(courseId);
      });
  }

  safeHtmlDescription(htmlString: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(htmlString);
  }
}
