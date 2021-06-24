import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { EtsyAuthenticationService } from '../services/authentication.service';
import { ETSY_KEYSTRING } from '../tokens/keystring';

@Injectable()
export class EtsyAuthenticationInterceptor implements HttpInterceptor {
  constructor(
    @Inject(ETSY_KEYSTRING) private etsyKeystring: string,
    private injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.injector.get(EtsyAuthenticationService);
    return auth.accessToken$.pipe(
      first(),
      switchMap((token) => {
        if (token) {
          req = req.clone({
            setHeaders: {
              'x-api-key': this.etsyKeystring,
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
        } else {
          req = req.clone({
            setHeaders: {
              'x-api-key': this.etsyKeystring,
            },
          });
        }
        return next.handle(req);
      })
    );
  }
}
