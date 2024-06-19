import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@angular/forms';

import { LoadService } from 'src/app/shared/services/load.service';
import { SearchCourseApiService } from 'src/app/core/api/search-course/search-course-api.service';
import { ParticipationApiService } from 'src/app/core/api/participation/participation-api.service';
import { TSearchedCourse } from 'src/app/core/api/search-course/search-course-api.interface';
import { ECourseParticipationStatuses } from 'src/app/core/api/search-course/search-course-api.enum';

import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-search-page',
  templateUrl: './course-search-page.component.html',
  styleUrls: ['./course-search-page.component.scss'],
  providers: [SearchCourseApiService, LoadService, ParticipationApiService],
})
export class CourseSearchPageComponent implements OnInit {
  searchControl: FormControl<string> = new FormControl<string>('', {
    nonNullable: true,
  });

  private _searchedCourses$ = new BehaviorSubject<TSearchedCourse[] | null>(
    null
  );
  searchedCourses$ = this._searchedCourses$.asObservable();

  isLoading$ = this.loadService.isLoading$;

  constructor(
    private participationApiService: ParticipationApiService,
    private searchCourseApiService: SearchCourseApiService,
    private loadService: LoadService
  ) {}

  ngOnInit(): void {
    this.subOnSearchChanges();
  }

  subOnSearchChanges(): void {
    this.searchControl.valueChanges
      .pipe(
        untilDestroyed(this),
        distinctUntilChanged(),
        debounceTime(300),
        filter((changes) => {
          if (!changes) {
            this._searchedCourses$.next(null);
            return false;
          }
          return true;
        }),
        switchMap((search) =>
          this.loadService.wrapObservable(
            this.searchCourseApiService.searchCourses(search)
          )
        )
      )
      .subscribe((courses) => {
        this._searchedCourses$.next(courses);
      });
  }

  sendParticipationToCourse(courseId: string): void {
    this.loadService
      .wrapObservable(
        this.participationApiService
          .createParticipation(courseId)
          .pipe(untilDestroyed(this))
      )
      .subscribe(() => {
        const currentCourses = this._searchedCourses$.getValue()!;
        console.log(currentCourses, courseId);
        for (const currentCourse of currentCourses) {
          if (currentCourse.id === courseId) {
            console.log(currentCourse.id);
            currentCourse.participationStatus =
              ECourseParticipationStatuses.REQUESTOR;
          }
        }

        console.log(currentCourses);
        this._searchedCourses$.next(currentCourses);
      });
  }

  isPossibleSendRequest(course: TSearchedCourse): boolean {
    return course.participationStatus === ECourseParticipationStatuses.NONE;
  }
}
