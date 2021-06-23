import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AppAuthenticationService } from '../services/authentication.service';

@Injectable()
export class AppAuthenticationInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AppAuthenticationService);
    return auth.accessToken$.pipe(
      first(),
      switchMap((token) => {
        if (token) {
          req = req.clone({
            setHeaders: {
              'x-api-key': environment.keystring,
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
        } else {
          req = req.clone({
            setHeaders: {
              'x-api-key': environment.keystring,
            },
          });
        }
        return next.handle(req);
      })
    );
  }
}
