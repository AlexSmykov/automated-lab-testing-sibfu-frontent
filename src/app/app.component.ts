import { Component } from '@angular/core';

import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private errorService: ErrorService) {}
}
