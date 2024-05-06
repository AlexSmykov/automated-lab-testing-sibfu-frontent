import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPartialRoutes } from 'src/app/shared/router-paths';
import { CoursesPageComponent } from 'src/app/pages/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursesPageComponent,
      },
      {
        path: EPartialRoutes.COURSE_CREATE,
        loadChildren: () =>
          import(
            'src/app/pages/courses-page/pages/create-course-page/create-course-page.module'
          ).then((m) => m.CreateCoursePageModule),
      },
      {
        path: EPartialRoutes.COURSES_ID,
        loadChildren: () =>
          import(
            'src/app/pages/courses-page/pages/course-page/course-page.module'
          ).then((m) => m.CoursePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
