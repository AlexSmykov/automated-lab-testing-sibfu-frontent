import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'

import { LocalStorageService } from 'src/app/core/storage/local-storage.service'
import { EStorageItems } from 'src/app/core/storage/local-storage.enum'

import { Observable } from 'rxjs'

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let clonedRequest = request
    if (this.localStorageService.checkItem(EStorageItems.USERNAME)) {
      clonedRequest = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Basic` + btoa(`${EStorageItems.USERNAME}:${EStorageItems.PASSWORD}`)
        ),
      })
    }
    return next.handle(clonedRequest)
  }
}
