import { Injectable } from '@angular/core'

import { ERoles } from 'src/app/core/role/role.enum'

import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class RoleService {
  private _currentRole$ = new BehaviorSubject<ERoles>(ERoles.GUEST)

  get currentRole$(): Observable<ERoles> {
    return this._currentRole$.asObservable()
  }

  get currentRole(): ERoles {
    return this._currentRole$.getValue()
  }

  get isTeacher(): boolean {
    return this._currentRole$.getValue() === ERoles.TEACHER
  }

  get isStudent(): boolean {
    return this._currentRole$.getValue() === ERoles.STUDENT
  }

  setCurrentRole(role: ERoles): void {
    this._currentRole$.next(role)
  }
}
