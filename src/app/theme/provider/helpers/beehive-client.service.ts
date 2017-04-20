import 'rxjs/add/operator/catch';

import {
  ConnectionBackend,
  Headers,
  Http,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response,
} from '@angular/http';

import { ClearAction } from '../../redux/token/actions';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { RequestHelper } from './request-helper';
import { RootState } from '../../redux/index';
import { StateSelectors } from '../../redux/selectors';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BeehiveClient extends Http {

  constructor(
    _backend: ConnectionBackend,
    _requestOpt: RequestOptions,
    private requestHelder: RequestHelper,
    private localStorageService: LocalStorageService
  ) {
    super(_backend, _requestOpt);
  }

  public request(url: string | Request, options: RequestOptionsArgs = {}): Observable<Response> {
    let beehiveHeaders = this.beehiveHeaders;
    let requestOptions = url instanceof String ? options : url;

    requestOptions.headers = requestOptions.headers ?
      this.requestHelder.mergeHeaders([requestOptions.headers, beehiveHeaders]) :
      beehiveHeaders;

    return super.request(url, requestOptions)
      .catch((res) => {
        if (res.status === 401) {
          this.localStorageService.remove('token');
          return null;
        }
        return Observable.throw(res);
      });
  }

  private get beehiveHeaders() {
    let beehiveHeaders: Headers;

    if (this.loggedIn) {
      this.requestHelder.headersWithToken
        .subscribe((headers) => {
          beehiveHeaders = headers;
        });
    } else {
      this.requestHelder.headers
        .subscribe((headers) => {
          beehiveHeaders = headers;
        });
    }

    return beehiveHeaders;
  }

  private get loggedIn(): boolean {
    let loggedIn: boolean = false;
    return loggedIn;
  }
}
