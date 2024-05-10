import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
})
export class TextareaInputComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() placeholder: string = '';
  @Input() maxLength: number = 1000;
  @Input() startSizeInLines: number = 4;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }
  constructor(private errorService: ErrorService) {}
}
