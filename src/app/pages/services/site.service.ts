import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

const URL = RESOURCE.SITE_APPROVED;

@Injectable()
export class SiteService {

  constructor(
    private http: HttpService
  ) { }

  public get() {
    return this.http
      .get(URL)
      .map((res) => res.json());
  }

  public delete(id: number) {
    return this.http
      .delete(URL, [id]);
  }
}
