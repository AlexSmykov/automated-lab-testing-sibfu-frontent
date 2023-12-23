import { Component, OnInit } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ActivatedRoute } from '@angular/router'

import { PracticePageService } from './practice-page.service'
import { SideBarService } from '../../../../../../components/side-bar/side-bar.service'

@UntilDestroy()
@Component({
  selector: 'app-course-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss'],
  providers: [PracticePageService],
})
export class PracticePageComponent implements OnInit {
  practice$ = this.practicePageService.practice$

  constructor(
    private practicePageService: PracticePageService,
    private sideBarService: SideBarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        const courseId: number = +params['id']
        this.practicePageService.updatePractice(courseId)
        this.sideBarService.selectPractice(courseId)
      })
  }
}
