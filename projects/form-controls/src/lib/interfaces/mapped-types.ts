export type TFunctionMapper<T> = (value: any) => T

export type TEnumNames<T extends number | string, Value> = {
  [key in T]: Value
}
