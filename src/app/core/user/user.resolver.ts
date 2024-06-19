import { inject } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';

export const userResolver = () => {
  const userService = inject(UserService);

  return userService.getMe$();
};
