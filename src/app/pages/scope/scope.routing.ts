import { RouterModule, Routes }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { ScopeComponent } from './scope.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScopeComponent,
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
