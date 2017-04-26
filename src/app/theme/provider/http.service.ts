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
    let requestOptions = url instanceof String ? options : url;

    requestOptions.headers = Object.assign(requestOptions.headers, this.basicHeaders);
    // requestOptions.withCredentials = true;

    return super.request(url, requestOptions).catch(this.catchAuthError(this));
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

  private get basicHeaders() {
    let username: string = 'admin@kii.com';
    let password: string = 'Kiiadmin2016';

    let headers = new Headers();

    headers.append(this.meta.getHeader(), this.meta.getValue());
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
