import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ErrorService } from 'src/app/shared/services/error.service';
import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

@Component({
  selector: 'app-multiselect-input',
  templateUrl: './multiselect-input.component.html',
  styleUrls: ['./multiselect-input.component.scss'],
})
export class MultiselectInputComponent {
  @Input({ required: true }) control!: FormControl<number[]>;
  @Input() items: TNamedEntity[] = [];
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() placeholder: string = '';

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  constructor(private errorService: ErrorService) {}
}
