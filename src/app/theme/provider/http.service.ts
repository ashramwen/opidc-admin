import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';

import { AlertModalComponent } from './../../pages/components/alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { MetaService } from './meta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { OpidcError } from './../../pages/models/error.model';
import { Router } from '@angular/router';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    private router: Router,
    private meta: MetaService,
    private modal: NgbModal
  ) {
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let requestOptions = url instanceof String ? options : url;

    requestOptions.headers = Object.assign(requestOptions.headers, this.basicHeaders);
    // requestOptions.withCredentials = true;

    return super
      .request(url, requestOptions)
      .catch(this.catchAuthError(this));
  }

  get(url: string, paths: any[] = [], options?: RequestOptionsArgs): Observable<Response> {
    url = this.buildUrl(url, paths);
    return super.get(url, options);
  }

  post(url: string, paths: any[] = [], body: any, options?: RequestOptionsArgs): Observable<Response> {
    url = this.buildUrl(url, paths);
    return super.post(url, body, options);
  }

  put(url: string, paths: any[] = [], body: any, options?: RequestOptionsArgs): Observable<Response> {
    url = this.buildUrl(url, paths);
    return super.put(url, body, options);
  }

  delete(url: string, paths: any[] = [], options?: RequestOptionsArgs): Observable<Response> {
    url = this.buildUrl(url, paths);
    return super.delete(url, options);
  }

  private buildUrl(apiPath: string, paths: any[] = []): string {
    return [BASE_CONFIG.siteUrl, `api/${apiPath}`, ...paths].join('/');
  }

  private catchAuthError(self: HttpService) {
    return (res: Response) => {
      console.log(res);
      switch (res.status) {
        case 401:
        case 403:
          this.redirectToLogin();
          break;
        // case 409:
        //   this.alert(JSON.parse(res['_body']));
        //   break;
        default:
          let error: OpidcError;
          if (res['_body']) {
            error = JSON.parse(res['_body']);
          }
          else {
            error = {
              error: 'Error',
              error_description: res.status.toString()
            };
          }
          this.alert(error, res.status);
          break;
      }
      return Observable.throw(res);
    };
  }

  private get basicHeaders() {
    let headers = new Headers();

    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    let xsrf = this.meta.getCSRF();
    if (xsrf)
      headers.set(xsrf.header, xsrf.value);

    if (BASE_CONFIG.username)
      headers.set('Authorization', 'Basic ' + btoa(BASE_CONFIG.username + ':' + BASE_CONFIG.password));

    return headers;
  }

  private alert(error: OpidcError, errorCode?: number | string) {
    let activeModal = this.modal.open(AlertModalComponent);
    activeModal.componentInstance.modalHeader = error.error;
    activeModal.componentInstance.modalContent = error.error_description;
    activeModal.componentInstance.errorCode = errorCode;
  }

  private redirectToLogin() {
    setTimeout(() => {
      window.location.href = `${BASE_CONFIG.siteUrl}/login`;
    }, 0);
  }
}
