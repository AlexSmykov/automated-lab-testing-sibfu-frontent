import { inject } from '@angular/core';

import { DictionaryService } from 'src/app/core/dictionaries/dictionary.service';
import { TDictionaries } from 'src/app/core/dictionaries/dictionary.interface';

import { Observable } from 'rxjs';

export const dictResolver = (): Observable<TDictionaries> => {
  const dictService = inject(DictionaryService);
  return dictService.getDicts$();
};
