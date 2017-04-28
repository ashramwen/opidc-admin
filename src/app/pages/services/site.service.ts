import { ConfigHelper } from './../../theme/provider/config-helper';
import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SiteService {

  constructor(
    private configHelper: ConfigHelper,
    private http: HttpService
  ) { }

  public get() {
    let url = this.configHelper.buildUrl(RESOURCE.SITE_APPROVED);
    return this.http
      .get(url)
      .map((res) => res.json());
  }
}
