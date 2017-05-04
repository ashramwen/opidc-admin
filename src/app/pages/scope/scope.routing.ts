import { RouterModule, Routes } from '@angular/router';

import { ManageScopeComponent } from './components/manage-scope/manage-scope.component';
import { ModuleWithProviders } from '@angular/core';
import { ScopeComponent } from './scope.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [{
  path: '',
  component: ScopeComponent
}, {
  path: 'new',
  component: ManageScopeComponent
}, {
  path: 'edit/:id',
  component: ManageScopeComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
