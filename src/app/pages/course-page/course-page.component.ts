import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursePageService } from 'src/app/pages/course-page/course-page.service';
import { SideBarService } from 'src/app/components/side-bar/side-bar.service';
import { ERoles } from 'src/app/core/role/role.enum';
import { EFullRoutes, ERoutesIds } from 'src/app/shared/router-paths';

@UntilDestroy()
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [CoursePageService],
})
export class CoursePageComponent implements OnInit {
  course$ = this.coursePageService.course$;

  readonly ERoles = ERoles;
  readonly EFullRoutes = EFullRoutes;

  constructor(
    private coursePageService: CoursePageService,
    private sideBarService: SideBarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        const courseId: string = params[ERoutesIds.COURSE_ID];
        this.coursePageService.updateCourse(courseId);
        this.sideBarService.selectCourse(courseId);
        this.sideBarService.unselectPractice();
      });
  }
  editCourse(): void {
    this.course$.pipe(untilDestroyed(this)).subscribe((course) => {
      this.router.navigate(EFullRoutes.COURSE_EDIT(course?.id + ''));
    });
  }
}
