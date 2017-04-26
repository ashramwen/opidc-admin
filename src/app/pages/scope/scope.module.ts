import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { ScopeComponent } from './scope.component';
import { ScopeService } from './scope.service';
import { routing } from './../scope/scope.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [ScopeComponent],
  providers: [ScopeService]
})
export class ScopeModule { }
