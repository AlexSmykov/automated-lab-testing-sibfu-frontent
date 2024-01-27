export type TKeyInEnum<T extends string, Value> = {
  [key in T]: Value
}
