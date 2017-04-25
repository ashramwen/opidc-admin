import { RouterModule, Routes }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { SiteComponent } from './site.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
