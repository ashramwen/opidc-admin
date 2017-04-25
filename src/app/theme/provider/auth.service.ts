import { Injectable } from '@angular/core';
import { MetaService } from './meta.service';
import { Role } from '../model/role.enum';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private logger = new Subject<boolean>();
  private loggedIn = false;

  constructor(
    public router: Router,
    private meta: MetaService
  ) { }

  // public login(credential: Credential) {
  //   let url = this.configHelper.buildUrl(RESOURCE.AUTH, ['login']);
  //   let requestOptions: RequestOptionsArgs = {};
  //   credential.permanentToken = false;
  //   return this.http
  //     .post(url, credential, requestOptions)
  //     .map((res) => res.json())
  //     .subscribe((res: User) => {
  //       // this.localStorageService.set('token', res);
  //       this.loggedIn = true;
  //       this.logger.next(this.loggedIn);
  //       this.router.navigate(['']);
  //     });
  // }

  public logout() {
    // this.localStorageService.remove('token');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    return !!(this.csrf.get());
  }

  public getRole(): Role {
    return this.csrf.getRole();
  }
}
