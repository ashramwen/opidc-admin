import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../theme/provider/role.guard';
import { LoginGuard } from './../theme/provider/login.guard';
import { ModuleWithProviders } from '@angular/core';
import { Pages } from './pages.component';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [{
  path: 'login',
  loadChildren: 'app/pages/login/login.module#LoginModule'
// }, {
//   path: 'authorize',
//   loadChildren: 'app/pages/authorize/authorize.module#AuthorizeModule',
//   canActivate: [LoginGuard]
}, {
  path: 'pages',
  component: Pages,
  children: [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    {
      path: 'client',
      loadChildren: 'app/pages/client/client.module#ClientModule',
      canActivate: [LoginGuard, AdminGuard]
    },
    {
      path: 'scope',
      loadChildren: 'app/pages/scope/scope.module#ScopeModule',
      canActivate: [LoginGuard, AdminGuard]
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
    }
  ]
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
