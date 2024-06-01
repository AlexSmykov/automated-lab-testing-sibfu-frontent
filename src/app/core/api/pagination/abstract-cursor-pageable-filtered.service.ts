import { Injectable } from '@angular/core';

import { AbstractCursorPageableService } from 'src/app/core/api/pagination/abstract-cursor-pageable.service';
import {
  TCursorPageable,
  TCursorPageableQuery,
} from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';

import { Observable } from 'rxjs';

const DEFAULT_PAGE_SIZE = 10;

@Injectable()
export abstract class AbstractCursorPageableFilteredService<
  ListItemType,
  FiltersType,
> extends AbstractCursorPageableService<ListItemType> {
  protected _queryParams: Partial<FiltersType> = {};

  constructor(pageSize: number = DEFAULT_PAGE_SIZE) {
    super(pageSize);
  }

  setQueryParams(params: Partial<FiltersType>): void {
    this._queryParams = params;
  }

  setQueryParam(
    paramName: keyof FiltersType,
    param: FiltersType[typeof paramName]
  ): void {
    this._queryParams[paramName] = param;
  }

  clearQueryParam(paramName: keyof FiltersType): void {
    delete this._queryParams[paramName];
  }

  clearQueryAll(): void {
    this._queryParams = {};
  }

  protected abstract loadListQuery(
    query: TCursorPageableQuery & Partial<FiltersType>
  ): Observable<TCursorPageable<ListItemType>>;

  protected override loadList(
    query: TCursorPageableQuery
  ): Observable<TCursorPageable<ListItemType>> {
    return this.loadListQuery({ ...query, ...this._queryParams });
  }
}
