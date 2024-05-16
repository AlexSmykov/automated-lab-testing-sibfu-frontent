import { TRegistrationPost } from 'src/app/core/api/registration/registration-api.interface';

export type TRegistrationFormValue = TRegistrationPost & {
  passwordConfirm: string;
};
