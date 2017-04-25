import { RequestOptions, XHRBackend } from '@angular/http';

import { AuthService } from './provider/auth.service';
import { ConfigHelper } from './provider/config-helper';
import { HttpService } from './provider/http.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoginGuard } from './provider/login.guard';
import { MetaService } from './provider/meta.service';
import { NgModule } from '@angular/core';
import { RoleGuard } from './provider/role.guard';
import { Router } from '@angular/router';
import { localStorageConfig } from './constants/local-storage.config';

export function httpClientFactory(backend: XHRBackend, options: RequestOptions, meta: MetaService, router: Router) {
  return new HttpService(backend, options, meta, router);
}

@NgModule({
  imports: [
    LocalStorageModule.withConfig(localStorageConfig)
  ],
  providers: [
    MetaService,
    AuthService,
    ConfigHelper,
    LoginGuard,
    RoleGuard,
    {
      provide: HttpService,
      deps: [XHRBackend, RequestOptions, MetaService, Router],
      useFactory: httpClientFactory
    }
  ]
})
export class AuthModule { }
