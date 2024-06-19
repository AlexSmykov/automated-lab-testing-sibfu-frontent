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
          import('src/app/pages/course-form-page/course-form-page.module').then(
            (m) => m.CourseFormPageModule
          ),
      },
      {
        path: EPartialRoutes.COURSE_SEARCH,
        loadChildren: () =>
          import(
            'src/app/pages/course-search-page/course-search-page.module'
          ).then((m) => m.CourseSearchPageModule),
      },
      {
        path: EPartialRoutes.COURSES_ID,
        children: [
          {
            path: '',
            redirectTo: EPartialRoutes.PRACTICES,
            pathMatch: 'full',
          },
          {
            path: EPartialRoutes.COURSE_PARTICIPATION,
            loadChildren: () =>
              import(
                'src/app/pages/course-participations-page/course-participations-page.module'
              ).then((m) => m.CourseParticipationsPageModule),
          },
          {
            path: EPartialRoutes.COURSE_EDIT,
            loadChildren: () =>
              import(
                'src/app/pages/course-form-page/course-form-page.module'
              ).then((m) => m.CourseFormPageModule),
          },
          {
            path: EPartialRoutes.PRACTICES,
            loadChildren: () =>
              import('src/app/pages/course-page/course-page.module').then(
                (m) => m.CoursePageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
