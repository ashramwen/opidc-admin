import { RouterModule, Routes }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
