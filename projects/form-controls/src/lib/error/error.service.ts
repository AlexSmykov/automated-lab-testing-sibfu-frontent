import { Injectable } from '@angular/core'
import { EErrors, EErrorTextsBase, TErrors } from './error.enum'
import { EValidatePatterns, ValidatePatterns } from './validate-patterns'
import { FormControl } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class ErrorService {
  errorEnum: TErrors
  patternEnum: ValidatePatterns

  constructor() {
    this.errorEnum = EErrorTextsBase
    this.patternEnum = EValidatePatterns
  }

  initCustomErrors(customErrors: TErrors): void {
    this.errorEnum = { ...this.errorEnum, ...customErrors }
  }

  initCustomPatterns(customPatterns: ValidatePatterns): void {
    this.patternEnum = { ...this.patternEnum, ...customPatterns }
  }

  checkError(control: FormControl): string {
    if (control.touched) {
      const errors = control.errors
      if (errors) {
        const errorList = Object.entries(control.errors)
        switch (errorList[0][0]) {
          case EErrors.PATTERN:
            return this.patternEnum[errorList[0][1]['requiredPattern']]
              .errorText as string

          default:
            return this.errorEnum[errorList[0][0]].text as string
        }
      }
    }
    return ''
  }
}
