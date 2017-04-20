import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './../../theme/auth.module';
import { CommonModule } from '@angular/common';
import { Login } from './login.component';
import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    AuthModule,
    routing
  ],
  declarations: [
    Login
  ],
  providers: []
})
export class LoginModule { }
