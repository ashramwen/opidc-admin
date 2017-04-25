import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { SiteComponent } from './site.component';
import { routing } from './../client/client.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [SiteComponent]
})
export class SiteModule { }
