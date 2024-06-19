import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { SideBarService } from 'src/app/components/side-bar/side-bar.service';
import { ERoles } from 'src/app/core/role/role.enum';
import { CoursePaginatedListService } from 'src/app/core/api/course/course-paginated-list.service';

@UntilDestroy()
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CoursePaginatedListService, CourseApiService],
})
export class CoursesPageComponent implements OnInit {
  courses$ = this.coursePaginatedListService.list$;
  isLoading$ = this.coursePaginatedListService.isLoading$;
  hasNextPage$ = this.coursePaginatedListService.hasNextPage$;

  readonly EFullRoutes = EFullRoutes;
  readonly ERoles = ERoles;

  constructor(
    private router: Router,
    private sideBarService: SideBarService,
    private coursePaginatedListService: CoursePaginatedListService
  ) {}

  ngOnInit(): void {
    this.coursePaginatedListService.updateList();
  }

  openCourse(courseId: string): void {
    this.router.navigate(EFullRoutes.COURSES_ID(courseId)).then(() => {
      this.sideBarService.selectCourse(courseId);
      this.sideBarService.unselectPractice();
    });
  }

  loadMoreCourses(): void {
    this.coursePaginatedListService.nextPage();
  }
}
