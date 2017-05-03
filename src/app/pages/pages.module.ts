import { AppTranslationModule } from '../app.translation.module';
import { AuthModule } from './../theme/auth.module';
import { ClientService } from './services/client.service';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgModule } from '@angular/core';
import { NgaModule } from '../theme/nga.module';
import { PagerService } from './services/pager.service';
import { Pages } from './pages.component';
import { ScopeService } from './services/scope.service';
import { SiteService } from './services/site.service';
import { TokenService } from './services/token.service';
import { routing } from './pages.routing';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, AuthModule, routing],
  declarations: [Pages],
  providers: [PagerService, ClientService, ScopeService, SiteService, TokenService]
})
export class PagesModule {

}
