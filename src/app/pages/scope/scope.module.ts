import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { ManageScopeComponent } from './components/manage-scope/manage-scope.component';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { ScopeComponent } from './scope.component';
import { routing } from './../scope/scope.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [ScopeComponent, ManageScopeComponent],
  providers: []
})
export class ScopeModule { }
