import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { TokenService } from 'src/app/core/token/token.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let clonedRequest = request;
    if (this.tokenService.token) {
      clonedRequest = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Token ${this.tokenService.token}`
        ),
      });
    }
    return next.handle(clonedRequest);
  }
}
