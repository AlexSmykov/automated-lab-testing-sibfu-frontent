import { booleanAttribute, Component, Input } from '@angular/core';

import { TAttempt } from 'src/app/core/api/attempt/attempt-api.interface';

@Component({
  selector: 'app-attempt-list',
  templateUrl: './attempt-list.component.html',
  styleUrls: ['./attempt-list.component.scss'],
})
export class AttemptListComponent {
  @Input({ required: true }) attempts!: TAttempt[];
  @Input({ transform: booleanAttribute }) withName = true;
}
