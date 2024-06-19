import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { CourseApiService } from 'src/app/core/api/course/course-api.service';
import { LoadService } from 'src/app/shared/services/load.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  providers: [CourseApiService, LoadService],
})
export class NotFoundPageComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  toMainPage(): void {
    this.router.navigate(EFullRoutes.MAIN);
  }

  toLogin(): void {
    this.authService.logout();
    this.router.navigate(EFullRoutes.MAIN);
  }
}
