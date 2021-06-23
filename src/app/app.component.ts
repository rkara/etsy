import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppAuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test';

  private subscriptions = new Subscription();

  constructor(private auth: AppAuthenticationService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.auth.accessToken$.subscribe((accessToken) => {
        debugger;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
