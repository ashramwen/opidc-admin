import { RouterModule, Routes }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { Pages } from './pages.component';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
