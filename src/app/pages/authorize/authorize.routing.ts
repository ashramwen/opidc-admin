import { RouterModule, Routes }  from '@angular/router';

import { AuthorizeComponent } from './authorize.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AuthorizeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
