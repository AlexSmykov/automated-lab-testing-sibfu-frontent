import { Injectable } from '@angular/core';

import { EStorageItems } from 'src/app/core/storage/local-storage.enum';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storage: Storage = localStorage;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: EStorageItems): string | null {
    return this.storage.getItem(key);
  }

  checkItem(key: EStorageItems): boolean {
    return !!this.storage.getItem(key);
  }

  removeItem(key: EStorageItems): void {
    this.storage.removeItem(key);
  }

  setItem(key: EStorageItems, value: string): void {
    this.storage.setItem(key, value);
  }
}
