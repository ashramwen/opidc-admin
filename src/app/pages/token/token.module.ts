import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenComponent } from './token.component';
import { TokenListComponent } from './components/token-list/token-list.component';
import { routing } from './../token/token.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModule,
    routing
  ],
  declarations: [TokenComponent, TokenListComponent],
  providers: []
})
export class TokenModule { }
