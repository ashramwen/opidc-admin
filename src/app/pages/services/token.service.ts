import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

const URL = RESOURCE.TOKEN;

@Injectable()
export class TokenService {

  constructor(
    private http: HttpService
  ) { }

  public getToken(type: string) {
    return this.http
      .get(URL, [type])
      .map((res) => res.json());
  }

  public delete(type: string, id: number) {
    return this.http
      .get(URL, [type, id]);
  }
}
