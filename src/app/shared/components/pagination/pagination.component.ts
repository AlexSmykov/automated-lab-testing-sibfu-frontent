import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input({ required: true }) size$!: Observable<number>;
  @Input({ required: true }) count$!: Observable<number>;

  @Output() pageChanged = new EventEmitter<number>();
}
