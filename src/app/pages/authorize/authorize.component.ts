import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorizeComponent implements OnInit {

  public accessType = [{
    text: 'openid:',
    desc: 'log in using your identity',
    value: 'openid'
  }, {
    text: 'profile:',
    desc: 'basic profile information',
    value: 'client_credentials'
  }, {
    text: 'email',
    desc: '',
    value: 'password'
  }, {
    text: 'offline_access:',
    desc: 'enables access to Claims when the user is not present and an OAuth 2.0 Refresh Token will be issued',
    value: 'implicit'
  }];

  public decisions = [{
    text: 'Remember this decision until I revoke it',
    value: '1'
  }, {
    text: 'Remember this decision for one hour',
    value: '2'
  }, {
    text: 'Prompt me again next time',
    value: '3'
  }];

  constructor() { }

  ngOnInit() {
  }

}
