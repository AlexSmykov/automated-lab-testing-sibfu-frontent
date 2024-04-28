export enum EErrors {
  REQUIRED = 'required',
  EMAIL = 'email',
  PASSWORD = 'password',
  PATTERN = 'pattern',
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
}

export const EErrorTextsBase: Record<EErrors, TErrorValue> = {
  [EErrors.REQUIRED]: {
    text: 'Обязательное поле',
  },
  [EErrors.EMAIL]: {
    text: 'Введите корректную почту',
  },
  [EErrors.PASSWORD]: {
    text: 'Пароли не совпадают',
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

export type TErrorValue = {
  text: string | ((value: any) => string)
}
