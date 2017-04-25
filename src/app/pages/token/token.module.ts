import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { TokenComponent } from './token.component';
import { routing } from './../client/client.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [TokenComponent]
})
export class TokenModule { }
