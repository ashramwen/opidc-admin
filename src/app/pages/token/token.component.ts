import { Component, OnInit } from '@angular/core';

import { TokenService } from './token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  public accessTokens: any[];
  public refreshTokens: any[];

  public activeTab: string = 'access';

  constructor(
    private token: TokenService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  public refresh() {
    this.accessTokens = undefined;
    this.refreshTokens = undefined;

    this.getToken();
  }

  private getToken() {
    this.token.getAccessToken()
      .subscribe(res => this.accessTokens = res);

    this.token.getRefreshToken()
      .subscribe(res => this.refreshTokens = res);
  }

}
