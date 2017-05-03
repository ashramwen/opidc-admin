import { Client } from './../models/client.model';
import { ConfigHelper } from './../../theme/provider/config-helper';
import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClientService {

  constructor(
    private configHelper: ConfigHelper,
    private http: HttpService
  ) { }

  public get() {
    let url = this.configHelper.buildUrl(RESOURCE.CLIENT);
    return this.http
      .get(url)
      .map((res) => res.json());
  }

  public getById(id: number) {
    let url = this.configHelper.buildUrl(RESOURCE.CLIENT, [id]);
    return this.http
      .get(url)
      .map((res) => res.json());
  }

  public create(client: Client) {
    let url = this.configHelper.buildUrl(RESOURCE.CLIENT);
    return this.http
      .post(url, client)
      .map((res) => res.json());
  }

  public update(client: Client) {
    let url = this.configHelper.buildUrl(RESOURCE.CLIENT, [client.id]);
    return this.http
      .put(url, client)
      .map((res) => res.json());
  }

  public delete(id: number) {
    let url = this.configHelper.buildUrl(RESOURCE.CLIENT, [id]);
    return this.http
      .delete(url);
  }
}
