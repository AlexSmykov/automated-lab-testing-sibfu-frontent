import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'
import { EErrors, EErrorTextsBase } from './error.enum'
import { TGroupValidator } from './form-validators'

export const passwordValidatorFn: TGroupValidator = (
  passwordControlName: string,
  confirmControlName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstInput: FormControl = (control as FormGroup).controls[
      passwordControlName
    ] as FormControl

    const secondInput: FormControl = (control as FormGroup).controls[
      confirmControlName
    ] as FormControl

    if (
      firstInput.value &&
      secondInput.value &&
      firstInput.value !== secondInput.value
    ) {
      secondInput.setErrors({ [EErrors.PASSWORD]: EErrorTextsBase.password })
    }
    return null
  }
}
