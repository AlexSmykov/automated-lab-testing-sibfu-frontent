import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { EErrors, EErrorTextsBase } from 'src/app/shared/enum/error.enum';
import {
  EValidatePatterns,
  unRegex,
} from 'src/app/shared/enum/validate-patterns';

const FIRST_ERROR = 0;
const ERROR_KEY = 0;
const ERROR_VALUE = 1;

@Injectable({ providedIn: 'root' })
export class ErrorService {
  customCheckFn?: (control: FormControl) => string;

  checkError(control: FormControl): string {
    if (control.touched) {
      const errors = control.errors;
      if (errors) {
        // Чтобы пользователь мог перезписывать проверку и текст для уже имеющихся ошибок и добавлять новые
        if (this.customCheckFn) {
          const customCheckerResult = this.customCheckFn(control);

          if (customCheckerResult) {
            return customCheckerResult;
          }
        }

        const errorList = Object.entries(control.errors);
        switch (errorList[FIRST_ERROR][ERROR_KEY]) {
          case EErrors.PATTERN:
            return (
              Object.values(EValidatePatterns).find(
                (item) =>
                  item.pattern ==
                  unRegex(
                    errorList[FIRST_ERROR][ERROR_VALUE]['requiredPattern']
                  )
              )?.errorText ?? (EErrorTextsBase.pattern.text as string)
            );

          default:
            const errorText =
              EErrorTextsBase[errorList[FIRST_ERROR][ERROR_KEY] as EErrors];
            if (errorText === undefined) {
              return errorList[FIRST_ERROR][ERROR_VALUE];
            }
            return typeof errorText.text === 'string'
              ? errorText.text
              : errorText.text(errorList[FIRST_ERROR][ERROR_VALUE]);
        }
      }
    }
    return '';
  }

  setCustomErrorCheckFn(checkFn: (control: FormControl) => string): void {
    this.customCheckFn = checkFn;
  }
}
