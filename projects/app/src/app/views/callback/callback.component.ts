import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { EtsyAuthenticationService } from 'projects/etsy/src/public-api';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class AppCallbackComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(private auth: EtsyAuthenticationService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.auth.performCallback$().subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
