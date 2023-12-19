import { Component } from '@angular/core'
import { ErrorService } from 'as-form-controls'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private errorService: ErrorService) {}
}
