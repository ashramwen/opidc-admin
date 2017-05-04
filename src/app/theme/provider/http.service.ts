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

    return super.request(url, requestOptions).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    return (res: Response) => {
      console.log(res);
      switch (res.status) {
        case 401:
        case 403:
          this.router.navigate(['/login']);
          break;
        case 409:
          this.alert(JSON.parse(res['_body']));
          break;
        default:
      }
      return Observable.throw(res);
    };
  }

  private get basicHeaders() {
    let username: string = 'admin@kii.com';
    let password: string = 'Kiiadmin2016';

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append(this.meta.getHeader(), this.meta.getValue());

    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    return headers;
  }

  private alert(error: OpidcError) {
    let activeModal = this.modal.open(AlertModalComponent);
    activeModal.componentInstance.modalHeader = error.error;
    activeModal.componentInstance.modalContent = error.error_description;
  }
}
