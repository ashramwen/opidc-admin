import { CommonModule, DatePipe } from '@angular/common';

import { AppTranslationModule } from './../../app.translation.module';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteComponent } from './site.component';
import { routing } from './../site/site.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModule,
    routing
  ],
  declarations: [SiteComponent],
  providers: [DatePipe]
})
export class SiteModule { }
