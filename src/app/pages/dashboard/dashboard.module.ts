import { AppTranslationModule } from '../../app.translation.module';
import { CommonModule }  from '@angular/common';
import { Dashboard } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [
  ]
})
export class DashboardModule {}
