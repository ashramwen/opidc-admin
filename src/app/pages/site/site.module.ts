import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { SiteComponent } from './site.component';
import { SiteService } from './site.service';
import { routing } from './../site/site.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [SiteComponent],
  providers: [SiteService]
})
export class SiteModule { }
