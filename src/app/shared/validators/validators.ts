import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { TGroupValidator } from 'src/app/shared/utils/form-validators';
import { EErrors, EErrorTextsBase } from 'src/app/shared/enum/error.enum';

export const passwordValidatorFn: TGroupValidator = (
  passwordControlName: string,
  confirmControlName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstInput: FormControl = (control as FormGroup).controls[
      passwordControlName
    ] as FormControl;

    const secondInput: FormControl = (control as FormGroup).controls[
      confirmControlName
    ] as FormControl;

    if (
      firstInput.value &&
      secondInput.value &&
      firstInput.value !== secondInput.value
    ) {
      secondInput.setErrors({ [EErrors.PASSWORD]: EErrorTextsBase.password });
    }
    return null;
  };
};

export const futureTimeValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const controlDate = control.value;
  if (!(controlDate instanceof Date)) {
    return null;
  }
  const currentTime = new Date();
  currentTime.setHours(0, 0, 0, 0);

  if (controlDate.getTime() < currentTime.getTime()) {
    return {
      futureTimeError: 'Вы не можете выбрать время раньше текущего',
    };
  }
  return null;
};
