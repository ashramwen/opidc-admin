import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { MetaService } from './meta.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class HttpService extends Http {

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    private meta: MetaService,
    private router: Router
  ) {
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('auth_token');
    if (url instanceof String) {
      if (!options) {
        options = { headers: new Headers() };
      }
      options.headers.set(this.meta.getHeader(), this.meta.getValue());
    } else {
      url.headers.set(this.meta.getHeader(), this.meta.getValue());
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        this.router.navigate(['/login']);
      }
      return Observable.throw(res);
    };
  }
}
