import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Scope } from '../models/scope.model';
import { Subject } from 'rxjs/Subject';

const URL = RESOURCE.SCOPES;

@Injectable()
export class ScopeService {

  constructor(
    private http: HttpService
  ) { }

  public get() {
    return this.http
      .get(URL)
      .map((res) => res.json());
  }

  public getById(id: number) {
    return this.http
      .get(URL, [id])
      .map((res) => res.json());
  }

  public create(scope: Scope) {
    return this.http
      .post(URL, [], scope)
      .map((res) => res.json());
  }

  public update(scope: Scope) {
    return this.http
      .put(URL, [scope.id], scope)
      .map((res) => res.json());
  }

  public delete(id: number) {
    return this.http
      .delete(URL, [id]);
  }
}
