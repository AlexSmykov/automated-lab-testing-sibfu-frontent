import { FormControl, FormGroup } from '@angular/forms'

export type TMappedFormControls<ValueType> = FormGroup<{
  [Property in keyof ValueType]: FormControl<ValueType[Property]>
}>
