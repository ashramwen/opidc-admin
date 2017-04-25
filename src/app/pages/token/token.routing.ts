import { RouterModule, Routes }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { TokenComponent } from './token.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TokenComponent,
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
