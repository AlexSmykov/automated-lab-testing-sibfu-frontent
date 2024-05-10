import { Injectable } from '@angular/core';

import { LanguagesApiService } from 'src/app/core/api/languages/languages-api.service';
import { TDictionaries } from 'src/app/core/dictionaries/dictionary.interface';
import { EDictionaries } from 'src/app/core/dictionaries/dictionary.enum';
import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

import { BehaviorSubject, filter, forkJoin, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DictionaryService {
  constructor(private languagesApiService: LanguagesApiService) {}
  private _dictionaries$ = new BehaviorSubject<TDictionaries | null>(null);

  dictionaries$ = this._dictionaries$
    .asObservable()
    .pipe(
      filter((dictionaries): dictionaries is TDictionaries => !!dictionaries)
    );

  getDicts$(): Observable<TDictionaries> {
    return forkJoin({
      [EDictionaries.LANGUAGES]: this.languagesApiService.get(),
    }).pipe(
      tap((dicts) => {
        this._dictionaries$.next(dicts);
      })
    );
  }

  getDictByName(name: EDictionaries): TNamedEntity[] {
    return this._dictionaries$.getValue()![name];
  }

  getDictValueByKey(name: EDictionaries, id: number): TNamedEntity | undefined {
    return this.getDictByName(name).find((item) => item.id === id);
  }
}
