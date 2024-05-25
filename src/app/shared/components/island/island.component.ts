import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.scss'],
})
export class IslandComponent {
  @Input() padding = 0;
}
