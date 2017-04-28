import { ConfigHelper } from './../../theme/provider/config-helper';
import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Scope } from '../models/scope.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScopeService {

  constructor(
    private configHelper: ConfigHelper,
    private http: HttpService
  ) { }

  public get() {
    let url = this.configHelper.buildUrl(RESOURCE.SCOPES);
    return this.http
      .get(url)
      .map((res) => res.json());
  }

  public add(scope: Scope) {
    let url = this.configHelper.buildUrl(RESOURCE.SCOPES);
    return this.http
      .post(url, scope)
      .map((res) => res.json());
  }
}
