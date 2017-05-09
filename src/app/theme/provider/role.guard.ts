import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Role } from '../model/role.enum';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let role = this.authService.getRole();
    if (role & Role.ROLE_ADMIN) {
      return true;
    } else {
      this.router.navigateByUrl('/pages/site');
      return false;
    }
  }
}
