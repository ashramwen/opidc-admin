import 'style-loader!./baPageTop.scss';

import { AuthService } from './../../provider/auth.service';
import { Component } from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public logoutUrl: string = `${BASE_CONFIG.siteUrl}/logout`;
  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState, private authSerice: AuthService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logout() {
    this.authSerice.logout();
  }
}
