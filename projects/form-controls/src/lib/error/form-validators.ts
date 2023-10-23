import { FormGroup, ValidatorFn } from '@angular/forms'

export type TGroupValidator = (...args: any[]) => ValidatorFn

export function addValidator(
  formGroup: FormGroup,
  validator: TGroupValidator,
  ...args: any[]
): void {
  formGroup.setValidators(validator(args))
}
