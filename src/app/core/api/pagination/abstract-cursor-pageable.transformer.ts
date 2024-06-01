import { TCursorPageableDto } from 'src/app/core/api/pagination/abstract-cursor-pageable.dto';
import { TCursorPageable } from 'src/app/core/api/pagination/abstract-cursor-pageable.interface';

export function deserializePagination<Dto, Data>(
  pagination: TCursorPageableDto<Dto>,
  valueTransformer: (dto: Dto) => Data
): TCursorPageable<Data> {
  return {
    count: pagination.count,
    results: pagination.results.map(valueTransformer),
  };
}
