import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ManageClientComponent } from './components/manage-client/manage-client.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  }, {
    path: 'new',
    component: ManageClientComponent
  }, {
    path: 'edit/:id',
    component: ManageClientComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
