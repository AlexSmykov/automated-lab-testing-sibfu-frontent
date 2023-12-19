import { EStorageItems } from '../app/core/storage/local-storage.enum'

export const environment = {
  production: true,
  baseUrl: 'http://', //TODO нужно уточнить после поднятия бэка
  localStorageAuthTokenName: EStorageItems.TOKEN,
}
