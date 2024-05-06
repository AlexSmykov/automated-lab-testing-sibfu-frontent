import { Injectable } from '@angular/core';

import { TLogin } from 'src/app/pages/login-page/login-page.interface';
import { TLoginDtoPost } from 'src/app/pages/login-page/login-page.dto';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable()
export class LoginPageService {
  constructor(private authService: AuthService) {}

  login(data: TLogin): void {}

  private serialize(data: TLogin): TLoginDtoPost {
    return data;
  }
}
