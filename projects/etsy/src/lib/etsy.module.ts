import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EtsyAuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { ETSY_API } from './tokens/api';

@NgModule({
  providers: [
    {
      useValue: 'https://openapi.etsy.com/v3',
      provide: ETSY_API,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EtsyAuthenticationInterceptor,
      multi: true
    }
  ],
})
export class EtsyModule {}
