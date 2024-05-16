import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_LANGUAGES } from 'src/app/core/api/api-urls';
import { TLanguagesDto } from 'src/app/core/api/languages/languages-api.dto';
import { deserializeLanguages } from 'src/app/core/api/languages/languages-api.transformer';
import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguagesApiService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<TNamedEntity[]> {
    return this.httpClient
      .get<TLanguagesDto>(API_LANGUAGES)
      .pipe(map((dto) => deserializeLanguages(dto)));
  }
}
