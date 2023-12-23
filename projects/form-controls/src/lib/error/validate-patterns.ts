import { TEnumNames } from '../interfaces/mapped-types'

enum EPatterns {
  PHONE = 'PHONE',
  FIO = 'FIO',
  EMAIL = 'EMAIL',
}

export const EValidatePatterns: TEnumNames<EPatterns, ValidatePattern> = {
  [EPatterns.PHONE]: {
    pattern: '(\\+7\\s\\(9\\d{2}\\)\\s\\d{3}\\s\\d{2}\\-\\d{2}|9\\d{9})',
    errorText: 'Неверно введён номер телефона',
  },
  [EPatterns.FIO]: {
    pattern:
      '[А-ЯЁA-Z][а-яёa-z]*([-][А-ЯЁA-Z][а-яёa-z]*)?\\s[А-ЯЁA-Z][а-яёa-z]*(\\s[А-ЯЁA-Z][а-яёa-z])?',
    errorText: 'Неверно введено ФИО',
  },
  [EPatterns.EMAIL]: {
    pattern: new RegExp(/^\S+@\S+\.\S+$/),
    errorText: 'Неверно введена почта',
  },
} as const

type ValidatePattern = {
  pattern: string | RegExp
  errorText: string
}

export function regexLike(almostRegexString: string): string {
  return `^${almostRegexString}$`
}

export function unRegex(regexString: string): string {
  return regexString.slice(1, regexString.length - 1)
}
