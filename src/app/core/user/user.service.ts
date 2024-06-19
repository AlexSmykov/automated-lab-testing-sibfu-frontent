import { Injectable } from '@angular/core';

import { UserApiService } from 'src/app/core/api/user-me/user-api.service';
import { TUser } from 'src/app/core/api/user-me/user-api.interface';
import { RoleService } from 'src/app/core/role/role.service';
import { ERoles } from 'src/app/core/role/role.enum';

import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _userMe$ = new BehaviorSubject<TUser | null>(null);

  get userMe$(): Observable<TUser | null> {
    return this._userMe$.asObservable();
  }

  constructor(
    private userApiService: UserApiService,
    private roleService: RoleService
  ) {}

  getMe$(): Observable<TUser> {
    return this.userApiService.getMe$().pipe(
      tap((user) => {
        this._userMe$.next(user);
        this.roleService.setCurrentRole(
          user.isTeacher ? ERoles.TEACHER : ERoles.STUDENT
        );
      })
    );
  }

  clearUser(): void {
    this._userMe$.next(null);
  }
}
