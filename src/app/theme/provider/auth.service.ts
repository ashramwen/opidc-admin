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

  public logout() {
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    return this.getRole() !== Role.NONE;
  }

  public getRole(): Role {
    return this.meta.getRole();
  }
}
