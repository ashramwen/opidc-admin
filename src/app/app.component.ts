// import 'style-loader!./app.scss';
// import 'style-loader!./theme/initial.scss';

import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { BaThemeConfig } from './theme/theme.config';
import { GlobalState } from './global.state';
import { layoutPaths } from './theme/theme.constants';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.scss', './theme/initial.scss'],
  encapsulation: ViewEncapsulation.None
})
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private viewContainerRef: ViewContainerRef,
    private themeConfig: BaThemeConfig) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

}
