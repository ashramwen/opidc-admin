import { AppTranslationModule } from '../app.translation.module';
import { AuthModule } from './../theme/auth.module';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgModule } from '@angular/core';
import { NgaModule } from '../theme/nga.module';
import { Pages } from './pages.component';
import { routing } from './pages.routing';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, AuthModule, routing],
  declarations: [Pages],
  providers: []
})
export class PagesModule {

}
