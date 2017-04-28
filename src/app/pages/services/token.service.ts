import { ConfigHelper } from './../../theme/provider/config-helper';
import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TokenService {

  constructor(
    private configHelper: ConfigHelper,
    private http: HttpService
  ) { }

  public getAccessToken() {
    let url = this.configHelper.buildUrl(RESOURCE.TOKEN, ['access']);
    return this.http
      .get(url)
      .map((res) => res.json());
  }

  public getRefreshToken() {
    let url = this.configHelper.buildUrl(RESOURCE.TOKEN, ['refresh']);
    return this.http
      .get(url)
      .map((res) => res.json());
  }
}
