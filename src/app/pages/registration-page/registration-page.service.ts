import { Injectable } from '@angular/core'

import { TRegistration } from './registration-page.interface'
import { AuthService } from '../../core/auth/auth.service'
import { TRegistrationDtoPost } from './registration-page.dto'

@Injectable()
export class RegistrationPageService {
  constructor(private authService: AuthService) {}

  register(data: TRegistration): void {
    this.authService.register(this.serialize(data)).subscribe()
  }

  private serialize(data: TRegistration): TRegistrationDtoPost {
    return data
  }
}
