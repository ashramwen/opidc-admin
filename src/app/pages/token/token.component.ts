import { Component, OnInit } from '@angular/core';

import { OpidcTokens } from './token.interface';
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
    private tokenService: TokenService
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
    this.tokenService.getAccessToken()
      .subscribe((res: OpidcTokens) => this.accessTokens = res);

    this.tokenService.getRefreshToken()
      .subscribe((res: OpidcTokens) => this.refreshTokens = res);
  }

}
