import { BaMenuService } from '../theme';
import { Component } from '@angular/core';
import { PAGES_MENU } from './pages.menu';
import { Routes } from '@angular/router';

@Component({
  selector: 'pages',
  templateUrl: './pages.html'
})
export class Pages {

  constructor(private _menuService: BaMenuService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
