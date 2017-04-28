import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Client } from './../../../models/client.model';
import { ClientService } from './../../../services/client.service';
import { Observable } from 'rxjs/Observable';
import { ScopeService } from './../../../services/scope.service';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  @Input()
  public client: Client;

  public responseTypes = [{
    text: 'CODE',
    value: 'code'
  }, {
    text: 'TOKEN',
    value: 'token'
  }, {
    text: 'ID_TOKEN',
    value: 'id_token'
  }];

  public grantTypes = [{
    text: 'authorization code',
    value: 'authorization_code'
  }, {
    text: 'client credentials',
    value: 'client_credentials'
  }, {
    text: 'password',
    value: 'password'
  }, {
    text: 'implicit',
    value: 'implicit'
  }, {
    text: 'refresh token',
    value: 'refresh_token'
  }];

  public subjectTypes = [{
    text: 'Public',
    value: 'PUBLIC',
    checked: true
  }, {
    text: 'Pairwise',
    value: 'PAIRWISE'
  }];

  public cbClientSecret: boolean = false;
  public cbDisplayClientSecret: boolean = false;
  public typeClientSecret: string = 'password';

  private clientId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private scopeService: ScopeService
  ) {
    this.client = new Client();
  }

  public ngOnInit() {
    this.activatedRoute.params
      .flatMap((params: Params) => {
        this.clientId = params['id'];
        if (this.clientId) {
          // edit
          return this.clientService.getById(this.clientId);
        } else {
          // new
          this.cbClientSecret = true;
          return Observable.of(new Client());
        }
      })
      .subscribe((res: Client) => {
        this.client = res;
      });
  }

  public clientSecretChange(value) {
    this.cbClientSecret = value[1];
  }

  public displayClientSecretChange(value) {
    this.cbDisplayClientSecret = value[1];
    this.typeClientSecret = this.cbDisplayClientSecret ? 'text' : 'password';
  }

  public save() {
    console.log(this.client.responseTypes);
  }
}
