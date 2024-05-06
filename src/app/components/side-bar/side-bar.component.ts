import { Component } from '@angular/core';

import { SideBarService } from './side-bar.service';
import { EFullRoutes } from '../../shared/router-paths';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  courses$ = this.sideBarService.courses$;
  courseId$ = this.sideBarService.selectedCourseId$;

  EFullRoutes = EFullRoutes;

  constructor(private sideBarService: SideBarService) {}
}
