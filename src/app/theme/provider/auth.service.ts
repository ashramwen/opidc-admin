import { Http, RequestOptionsArgs } from '@angular/http';

import { BeehiveClient } from './helpers/beehive-client.service';
import { ConfigHelper } from './helpers/config-helper';
import { Credential } from './../model/credential.interface';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { RESOURCE } from './../constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { User } from './../model/user.interface';

@Injectable()
export class AuthService {

  private logger = new Subject<boolean>();
  private loggedIn = false;

  constructor(
    private http: BeehiveClient,
    private configHelper: ConfigHelper,
    public router: Router,
    private localStorageService: LocalStorageService
  ) { }

  public login(credential: Credential) {
    let url = this.configHelper.buildUrl(RESOURCE.AUTH, ['login']);
    let requestOptions: RequestOptionsArgs = {};
    credential.permanentToken = false;

    return this.http
      .post(url, credential, requestOptions)
      .map((res) => res.json())
      .subscribe((res: User) => {
        this.localStorageService.set('token', res);
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
        this.router.navigate(['']);
      });
  }

  public logout() {
    this.localStorageService.remove('token');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = this.localStorageService.get('token') as User;
    return !!(token && token.accessToken);
  }
}
