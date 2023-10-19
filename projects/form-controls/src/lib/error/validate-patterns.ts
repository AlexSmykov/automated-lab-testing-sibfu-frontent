import { TFieldsMapper, TFunctionMapper } from '../interfaces/mapped-types'

export const EValidatePatterns: ValidatePatterns = {
  PHONE: {
    pattern: '(\\+7\\s\\(9\\d{2}\\)\\s\\d{3}\\s\\d{2}\\-\\d{2}|9\\d{9})',
    errorText: 'Неверно введён номер телефона',
  },
} as const

export type ValidatePatterns = TFieldsMapper<ValidatePattern>

type ValidatePattern = {
  pattern: string
  errorText: string | TFunctionMapper<string>
}