import { AppTranslationModule } from './../../app.translation.module';
import { ClientComponent } from './client.component';
import { ClientService } from './client.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ManageClientComponent } from './components/manage-client/manage-client.component';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './../client/client.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    NgbModule,
    FlexLayoutModule,
    routing
  ],
  declarations: [
    ClientComponent,
    ManageClientComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
