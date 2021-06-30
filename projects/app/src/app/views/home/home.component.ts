import { Component, OnInit } from '@angular/core';

import { EtsyAuthenticationService, EtsyUserService } from 'projects/etsy/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class AppHomeComponent implements OnInit {
  constructor(private auth: EtsyAuthenticationService, private userService: EtsyUserService) {}

  ngOnInit() {}

  _onLoginButtonClick() {
    this.auth.login();
  }

  _onApiTest() {
    this.userService.getUser$(4369).subscribe(res => {
      debugger;
    })
  }
}
