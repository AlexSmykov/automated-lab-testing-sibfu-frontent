import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent {
  @Input({ required: true }) control!: FormControl<Date>;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  constructor(private errorService: ErrorService) {}

  disabledDate = (selectedDate: Date) => {
    let isCan = true;

    if (this.minDate) {
      const minDateOnly = new Date(this.minDate.getTime());
      minDateOnly.setHours(0, 0, 0, 0);
      isCan = isCan && selectedDate.getTime() < minDateOnly.getTime();
    }

    if (this.maxDate) {
      const maxDateOnly = new Date(this.maxDate.getTime());
      maxDateOnly.setHours(0, 0, 0, 0);
      isCan = isCan && selectedDate.getTime() > maxDateOnly.getTime();
    }

    return isCan;
  };
}
