import { Component, OnInit } from '@angular/core';

import { ScopeService } from './scope.service';
import { Scopes } from './scope.interface';

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
