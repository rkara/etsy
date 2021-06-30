import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCallbackComponent } from './views/callback/callback.component';
import { AppHomeComponent } from './views/home/home.component';
import { environment } from '../environments/environment';
import { EtsyModule, ETSY_API, ETSY_KEYSTRING,  } from 'projects/etsy/src/public-api';
import { AppSharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AppCallbackComponent,
    AppHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppSharedModule,
    EtsyModule,
  ],
  providers: [
    { provide: ETSY_KEYSTRING, useValue: environment.keystring },
    {
      useValue: 'http://localhost:3000/etsy',
      provide: ETSY_API,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
