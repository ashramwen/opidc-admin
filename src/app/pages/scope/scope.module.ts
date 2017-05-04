import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManageScopeComponent } from './components/manage-scope/manage-scope.component';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScopeComponent } from './scope.component';
import { routing } from './../scope/scope.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    NgbModule,
    FlexLayoutModule,
    routing
  ],
  declarations: [ScopeComponent, ManageScopeComponent],
  providers: []
})
export class ScopeModule { }
