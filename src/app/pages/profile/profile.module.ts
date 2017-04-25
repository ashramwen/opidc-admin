import { AppTranslationModule } from './../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { ProfileComponent } from './profile.component';
import { routing } from './../profile/profile.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
