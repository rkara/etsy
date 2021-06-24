import { Component, OnInit } from '@angular/core';

import { EtsyAuthenticationService } from '../../../../../etsy/src/lib/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class AppHomeComponent implements OnInit {
  constructor(private auth: EtsyAuthenticationService) {}

  ngOnInit() {}

  _onLoginButtonClick() {
    this.auth.login();
  }
}
