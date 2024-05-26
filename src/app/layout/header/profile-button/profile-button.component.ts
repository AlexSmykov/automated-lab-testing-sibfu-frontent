import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { EFullRoutes } from 'src/app/shared/router-paths';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
  user$ = this.userService.userMe$;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate([EFullRoutes.LOGIN]);
  }
}
