import { AuthModule } from './../../theme/auth.module';
import { AuthorizeComponent } from './authorize.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgaModule } from './../../theme/nga.module';
import { routing } from './authorize.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    AuthModule,
    routing
  ],
  declarations: [AuthorizeComponent]
})
export class AuthorizeModule { }
