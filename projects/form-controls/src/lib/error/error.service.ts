import { Injectable } from '@angular/core'
import { EErrors, EErrorTextsBase } from './error.enum'
import { EValidatePatterns, unRegex } from './validate-patterns'
import { FormControl } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class ErrorService {
  customCheckFn?: (control: FormControl) => string

  checkError(control: FormControl): string {
    if (control.touched) {
      const errors = control.errors
      if (errors) {
        // Чтобы пользователь мог перезписывать проверку и текст для уже имеющихся ошибок и добавлять новые
        if (this.customCheckFn) {
          const customCheckerResult = this.customCheckFn(control)
          if (customCheckerResult) {
            return customCheckerResult
          }
        }
        const errorList = Object.entries(control.errors)
        switch (errorList[0][0]) {
          case EErrors.PATTERN:
            return (
              Object.values(EValidatePatterns).find(
                (item) =>
                  item.pattern == unRegex(errorList[0][1]['requiredPattern'])
              )?.errorText ?? (EErrorTextsBase['PATTERN'].text as string)
            )

          default:
            const errorText = EErrorTextsBase[errorList[0][0]].text
            return typeof errorText === 'string'
              ? errorText
              : errorText(errorList[0][1])
        }
      }
    }
    return ''
  }

  setCustomErrorCheckFn(checkFn: (control: FormControl) => string): void {
    this.customCheckFn = checkFn
  }
}
