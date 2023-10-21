export type TFieldsMapper<T> = {
  [key: string]: T
}

export type TFunctionMapper<T> = (value: any) => T
