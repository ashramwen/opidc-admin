import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

export function httpClientFactory(
  backend: XHRBackend,
  options: RequestOptions,
  router: Router,
  meta: MetaService,
  modal: NgbModal
) {
  return new HttpService(backend, options, router, meta, modal);
}

@NgModule({
  imports: [
    NgbModule,
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
      deps: [XHRBackend, RequestOptions, Router, MetaService, NgbModal],
      useFactory: httpClientFactory
    }
  ]
})
export class AuthModule { }
