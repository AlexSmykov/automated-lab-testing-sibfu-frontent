import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export type TFormGroupValue<ValueType> = FormGroup<{
  [Property in keyof ValueType]: ValueType[Property] extends AbstractControl
    ? ValueType[Property]
    : FormControl<ValueType[Property]>;
}>;
