import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class CoursesPageItemService {
  constructor(private httpClient: HttpClient) {}

  deleteCourse(courseId: string): Observable<void> {
    return this.httpClient.delete<void>('');
  }
}
