import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Client } from './../../../models/client.model';
import { ClientService } from './../../../services/client.service';
import { Observable } from 'rxjs/Observable';
import { ScopeService } from './../../../services/scope.service';

const REFRESH_TOKEN = 'refresh_token';

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
  }/*, {
    text: 'refresh token',
    value: 'refresh_token'
  }*/];

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
  public cbAccessTokenValiditySeconds: boolean = false;
  public cbRefreshToken: boolean = false;
  public cbRefreshTokenTimeout: boolean = true;

  private id?: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private scopeService: ScopeService
  ) {
    this.client = new Client();
  }

  public ngOnInit() {
    this.activatedRoute.params
      .flatMap((params: Params) => {
        this.id = +params['id'];
        if (this.id) {
          // edit
          return this.clientService.getById(this.id);
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

  public clientSecretChange() {
    if (this.cbClientSecret)
      delete this.client.clientSecret;
  }

  public displayClientSecretChange() {
    this.typeClientSecret = this.cbDisplayClientSecret ? 'text' : 'password';
  }

  public accessTokenValiditySecondsChange() {
    if (this.cbAccessTokenValiditySeconds)
      delete this.client.accessTokenValiditySeconds;
  }

  public refreshTokenChange() {
    let index = this.client.grantTypes.indexOf(REFRESH_TOKEN);
    if (this.cbRefreshToken) {
      if (index === -1)
        this.client.grantTypes.push(REFRESH_TOKEN);
      if (this.client.clearAccessTokensOnRefresh === undefined)
        this.client.clearAccessTokensOnRefresh = true;
      if (this.client.reuseRefreshToken === undefined)
        this.client.reuseRefreshToken = true;
    }
    else {
      if (index > -1)
        this.client.grantTypes.slice(index, 1);
    }
  }

  public refreshTokenTimeoutChange() {
    if (this.cbRefreshTokenTimeout)
      delete this.client.refreshTokenValiditySeconds;
  }

  public save() {
    // console.log(JSON.stringify(this.client));
    if (this.id) {
      this.clientService.update(this.client).subscribe(res => {
        this.router.navigate(['pages', 'client']);
      });
    } else {
      this.clientService.create(this.client).subscribe(res => {
        this.router.navigate(['pages', 'client']);
      });
    }
  }
}
