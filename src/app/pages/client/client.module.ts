import { AppTranslationModule } from './../../app.translation.module';
import { ClientComponent } from './client.component';
import { ClientService } from './client.service';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { routing } from './../client/client.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [ClientComponent],
  providers: [ClientService]
})
export class ClientModule { }
