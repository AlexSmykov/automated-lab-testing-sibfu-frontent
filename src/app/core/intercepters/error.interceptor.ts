import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/core/token/token.service';
import { EFullRoutes } from 'src/app/shared/router-paths';

import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private nzNotificationService: NzNotificationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let clonedRequest = request.clone({
      headers: request.headers.append(
        'Authorization',
        `Basic ${this.tokenService.token}`
      ),
    });
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.tokenService.clearToken();
          this.nzNotificationService.error(
            'Ошибка авторизации',
            'Вы не авторизованы, возможно, стек срок годности вашей авторизации',
            { nzDuration: 10000 }
          );
          this.router.navigate(EFullRoutes.LOGIN);
        } else if (error.status === 404) {
          this.nzNotificationService.error(
            'Ресурс не найден',
            'Вы обратились к несуществующему ресурсу, возможно, ошибка в работе сайта',
            { nzDuration: 10000 }
          );
          this.router.navigate(EFullRoutes.NOT_FOUND);
        }
        {
          this.nzNotificationService.error(
            'Ошибка в работе сервера',
            'К сожалению, на сервере произошла ошибка, попробуйте позже',
            { nzDuration: 10000 }
          );
          this.router.navigate(EFullRoutes.SERVER_ERROR);
        }
        return throwError(error);
      })
    );
  }
}
