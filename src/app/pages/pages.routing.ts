import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './../theme/provider/login.guard';
import { ModuleWithProviders } from '@angular/core';
import { Pages } from './pages.component';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [{
  path: 'login',
  loadChildren: 'app/pages/login/login.module#LoginModule'
}, {
  path: 'pages',
  component: Pages,
  children: [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    {
      path: 'client',
      loadChildren: 'app/pages/client/client.module#ClientModule',
      canActivate: [LoginGuard]
    },
    {
      path: 'profile',
      loadChildren: 'app/pages/profile/profile.module#ProfileModule',
      canActivate: [LoginGuard]
    },
    {
      path: 'site',
      loadChildren: 'app/pages/site/site.module#SiteModule',
      canActivate: [LoginGuard]
    },
    {
      path: 'token',
      loadChildren: 'app/pages/token/token.module#TokenModule',
      canActivate: [LoginGuard]
    },
    { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' }
  ]
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
