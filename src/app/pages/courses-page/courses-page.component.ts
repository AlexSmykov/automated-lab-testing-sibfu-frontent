import { Component, OnInit } from '@angular/core';

import { RoleService } from 'src/app/core/role/role.service';
import { EFullRoutes } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { TCourse } from 'src/app/core/api/course/course-api.interface';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CourseApiService],
})
export class CoursesPageComponent implements OnInit {
  private _courses$ = new BehaviorSubject<TCourse[] | null>(null);

  courses$ = this._courses$.asObservable();

  isTeacher = this.roleService.isTeacher;

  constructor(
    private courseApiService: CourseApiService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.courseApiService.getAll().subscribe((courses) => {
      this._courses$.next(courses);
    });
  }

  protected readonly EFullRoutes = EFullRoutes;
}
