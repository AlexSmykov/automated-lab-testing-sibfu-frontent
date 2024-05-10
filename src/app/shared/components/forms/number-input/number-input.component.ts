import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent {
  @Input({ required: true }) control!: FormControl<number>;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() min: number = -1000000;
  @Input() max: number = 1000000;
  @Input() step: number = 1;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  constructor(private errorService: ErrorService) {}
}
