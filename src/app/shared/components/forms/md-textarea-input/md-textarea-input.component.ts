import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ErrorService } from 'src/app/shared/services/error.service';

enum EFieldState {
  EDIT,
  PREVIEW,
}

@Component({
  selector: 'app-md-textarea-input',
  templateUrl: './md-textarea-input.component.html',
  styleUrls: ['./md-textarea-input.component.scss'],
})
export class MdTextareaInputComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() placeholder: string = '';
  @Input() maxLength: number = 1000;
  @Input() startSizeInLines: number = 4;

  readonly EFieldState = EFieldState;

  currentState: EFieldState = EFieldState.EDIT;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  constructor(private errorService: ErrorService) {}

  setState(state: EFieldState): void {
    this.currentState = state;
  }
}
