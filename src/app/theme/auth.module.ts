import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestOptions, XHRBackend } from '@angular/http';

import { AdminGuard } from './provider/role.guard';
import { AuthService } from './provider/auth.service';
import { HttpService } from './provider/http.service';
import { LoginGuard } from './provider/login.guard';
import { MetaService } from './provider/meta.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

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
    NgbModule
  ],
  providers: [
    MetaService,
    AuthService,
    LoginGuard,
    AdminGuard,
    {
      provide: HttpService,
      deps: [XHRBackend, RequestOptions, Router, MetaService, NgbModal],
      useFactory: httpClientFactory
    }
  ]
})
export class AuthModule { }
