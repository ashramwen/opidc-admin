import { Client } from './../models/client.model';
import { HttpService } from './../../theme/provider/http.service';
import { Injectable } from '@angular/core';
import { RESOURCE } from './../../theme/constants/resource';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

const URL = RESOURCE.CLIENT;

@Injectable()
export class ClientService {

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

  public create(client: Client) {
    return this.http
      .post(URL, [], client)
      .map((res) => res.json());
  }

  public update(client: Client) {
    return this.http
      .put(URL, [client.id], client)
      .map((res) => res.json());
  }

  public delete(id: number) {
    return this.http
      .delete(URL, [id]);
  }
}
