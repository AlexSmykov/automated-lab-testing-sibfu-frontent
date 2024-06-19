import { Component, Input } from '@angular/core';

import { EFullRoutes } from 'src/app/shared/router-paths';
import { SideBarService } from 'src/app/components/side-bar/side-bar.service';
import { TCourse } from 'src/app/core/api/course/course-api.interface';

@Component({
  selector: 'app-side-bar-course',
  templateUrl: './side-bar-course.component.html',
  styleUrls: ['./side-bar-course.component.scss'],
})
export class SideBarCourseComponent {
  @Input({ required: true }) course!: TCourse;

  courseId$ = this.sideBarService.selectedCourseId$;
  practiceId$ = this.sideBarService.selectedCoursePracticeId$;

  EFullRoutes = EFullRoutes;

  constructor(private sideBarService: SideBarService) {}

  onPracticeClick(id: string): void {
    this.sideBarService.selectPractice(id);
  }

  onCourseClick(): void {
    this.sideBarService.selectCourse(this.course.id);
    this.sideBarService.unselectPractice();
  }
}
