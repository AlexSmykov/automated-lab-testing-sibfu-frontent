import { EStorageItems } from '../app/core/storage/local-storage.enum'

export const environment = {
  production: false,
  baseUrl: 'http://', //TODO нужно уточнить после поднятия бэка
  localStorageAuthTokenName: EStorageItems.TOKEN,
}
