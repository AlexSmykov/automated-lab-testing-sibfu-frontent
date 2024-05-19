import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { TCourse } from 'src/app/core/api/course/course-api.interface';
import { SideBarService } from 'src/app/components/side-bar/side-bar.service';
import { LoadService } from 'src/app/shared/services/load.service';
import { ERoles } from 'src/app/core/role/role.enum';

import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CourseApiService, LoadService],
})
export class CoursesPageComponent implements OnInit {
  private _courses$ = new BehaviorSubject<TCourse[] | null>(null);

  courses$ = this._courses$.asObservable();
  isLoading$ = this.loadService.isLoading$;

  readonly EFullRoutes = EFullRoutes;
  readonly ERoles = ERoles;

  constructor(
    private router: Router,
    private loadService: LoadService,
    private sideBarService: SideBarService,
    private courseApiService: CourseApiService
  ) {}

  ngOnInit(): void {
    this.loadService
      .wrapObservable(this.courseApiService.getAll().pipe(untilDestroyed(this)))
      .subscribe((courses) => {
        this._courses$.next(courses);
      });
  }

  openCourse(courseId: string): void {
    this.router.navigate(EFullRoutes.COURSES_ID(courseId)).then(() => {
      this.sideBarService.selectCourse(courseId);
      this.sideBarService.unselectPractice();
    });
  }
}
