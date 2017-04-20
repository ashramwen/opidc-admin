import { Http, RequestOptions } from '@angular/http';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { AuthService } from './provider/auth.service';
import { ConfigHelper } from './provider/helpers/config-helper';
import { HELPER_SERVICES } from './provider/helpers/index';
import { LoginGuard } from './provider/login.guard';
import { NgModule } from '@angular/core';
import { RoleGuard } from './provider/role.guard';
import { User } from './model/user.interface';
import { localStorageConfig } from './constants/local-storage.config';

@NgModule({
  imports: [
    LocalStorageModule.withConfig(localStorageConfig)
  ],
  providers: [
    AuthService,
    ConfigHelper,
    LoginGuard,
    RoleGuard,
    ...HELPER_SERVICES
  ]
})
export class AuthModule { }
