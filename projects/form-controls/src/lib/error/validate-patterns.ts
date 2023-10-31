import { TFieldsMapper } from '../interfaces/mapped-types'

export const EValidatePatterns: ValidatePatterns = {
  PHONE: {
    pattern: '(\\+7\\s\\(9\\d{2}\\)\\s\\d{3}\\s\\d{2}\\-\\d{2}|9\\d{9})',
    errorText: 'Неверно введён номер телефона',
  },
  FIO: {
    pattern:
      '[А-ЯЁA-Z][а-яёa-z]*([-][А-ЯЁA-Z][а-яёa-z]*)?\\s[А-ЯЁA-Z][а-яёa-z]*(\\s[А-ЯЁA-Z][а-яёa-z])?',
    errorText: 'Неверно введён номер телефона',
  },
} as const

export type ValidatePatterns = TFieldsMapper<ValidatePattern>

type ValidatePattern = {
  pattern: string
  errorText: string
}

export function regexLike(almostRegexString: string): string {
  return `^${almostRegexString}$`
}

export function unRegex(regexString: string): string {
  return regexString.slice(1, regexString.length - 1)
}
