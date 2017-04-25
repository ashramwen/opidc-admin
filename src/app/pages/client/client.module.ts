import { AppTranslationModule } from './../../app.translation.module';
import { ClientComponent } from './client.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { routing } from './../client/client.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
