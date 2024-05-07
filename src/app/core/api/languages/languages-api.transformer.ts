import { TLanguagesDto } from 'src/app/core/api/languages/languages-api.dto';
import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

export function deserializeLanguages(dto: TLanguagesDto): TNamedEntity[] {
  return dto;
}
