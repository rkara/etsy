import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { EtsyAuthenticationService } from 'projects/etsy/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test';

  private subscriptions = new Subscription();

  constructor(private auth: EtsyAuthenticationService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.auth.accessToken$.subscribe((accessToken) => {
        if (accessToken) {
          debugger;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
