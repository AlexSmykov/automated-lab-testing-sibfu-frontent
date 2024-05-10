import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';
import { EDictionaries } from 'src/app/core/dictionaries/dictionary.enum';

export type TDictionaries = Record<EDictionaries, TNamedEntity[]>;
