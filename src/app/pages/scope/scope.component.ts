import { Component, OnInit } from '@angular/core';

import { ScopeService } from '../services/scope.service';
import { Scopes } from '../models/scope.model';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  public scopes: any[];
  constructor(
    private scopeService: ScopeService
  ) { }

  ngOnInit() {
    this.getScope();
  }

  public refresh() {
    this.scopes = undefined;
    this.getScope();
  }

  private getScope() {
    this.scopeService.get().subscribe((res: Scopes) => this.scopes = res);
  }
}
