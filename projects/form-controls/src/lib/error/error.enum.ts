import { TFieldsMapper, TFunctionMapper } from '../interfaces/mapped-types'

export enum EErrors {
  REQUIRED = 'required',
  EMAIL = 'email',
  PATTERN = 'pattern',
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
}

export const EErrorTextsBase: TErrors = {
  [EErrors.REQUIRED]: {
    text: 'Обязательное поле',
  },
  [EErrors.EMAIL]: {
    text: 'Введите корректную почту',
  },
  [EErrors.PATTERN]: {
    text: 'Некорректное значение',
  },
  [EErrors.MIN_LENGTH]: {
    text: (value: { actualLength: number; requiredLength: number }) =>
      `Не менее ${value.requiredLength} символов`,
  },
  [EErrors.MAX_LENGTH]: {
    text: (value: { actualLength: number; requiredLength: number }) =>
      `Не более ${value.requiredLength} символов`,
  },
} as const

export type TErrors = TFieldsMapper<TError>

export type TError = {
  text: string | TFunctionMapper<string>
}
