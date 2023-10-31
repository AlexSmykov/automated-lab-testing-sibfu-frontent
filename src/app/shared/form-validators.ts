import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms'

export function passwordConfirm(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (abstractControl: AbstractControl) => {
    const formGroup = abstractControl as FormGroup
    const control = formGroup.controls[controlName]
    const matchingControl = formGroup.controls[matchingControlName]

    if (
      matchingControl.errors &&
      !matchingControl.errors['confirmedValidator']
    ) {
      return null
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true })
    } else {
      matchingControl.setErrors(null)
    }
    return null
  }
}
