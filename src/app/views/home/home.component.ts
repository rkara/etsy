import { Component, OnInit } from '@angular/core';

import { AppAuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class AppHomeComponent implements OnInit {
  constructor(private auth: AppAuthenticationService) {}

  ngOnInit() {}

  _onLoginButtonClick() {
    this.auth.login();
  }
}
