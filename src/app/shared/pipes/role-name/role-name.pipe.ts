import { Pipe, PipeTransform } from '@angular/core';

import { ERoles, ERolesText } from 'src/app/core/role/role.enum';

@Pipe({
  name: 'roleName',
})
export class RoleNamePipe implements PipeTransform {
  transform(isTeacher: boolean): string {
    return isTeacher ? ERolesText[ERoles.TEACHER] : ERolesText[ERoles.STUDENT];
  }
}
