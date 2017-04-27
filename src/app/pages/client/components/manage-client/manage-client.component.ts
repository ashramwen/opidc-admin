import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Client } from './../../client.model';
import { ClientService } from './../../client.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  @Input()
  public client: Client;

  private clientId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService
  ) {
    this.client = new Client();
  }

  ngOnInit() {
    this.activatedRoute.params
      .flatMap((params: Params) => {
        this.clientId = params['id'];
        if (this.clientId) {
          return this.clientService.getById(this.clientId);
        } else {
          return Observable.of(new Client());
        }
      })
      .subscribe((res: Client) => {
        this.client = res;
      });
  }

  public save() {
    console.log(this.client.redirectUris);
  }
}
