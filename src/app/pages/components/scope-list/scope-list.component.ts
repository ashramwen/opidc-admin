import { ClientScope, ClientScopes } from '../../models/client-scope.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Scope } from './../../models/scope.model';
import { ScopeService } from './../../services/scope.service';

@Component({
  selector: 'scope-list',
  templateUrl: './scope-list.component.html',
  styleUrls: ['./scope-list.component.scss']
})
export class ScopeListComponent implements OnInit {

  public text: string;
  public scopes: ClientScopes;

  @Input()
  public placeholder: string = 'https://';

  @Input()
  public id: string;

  @Input()
  public get items() {
    return this._items;
  }

  public set items(value) {
    this._items = value;
  }

  @Output()
  public itemsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  private _items: string[];

  constructor(
    private scopeService: ScopeService
  ) { }

  ngOnInit() {
    if (!this._items)
      this._items = [];

    this.scopeService.get().subscribe((res: ClientScopes) => {
      this.scopes = res;
      this.scopes.forEach(scope => {
        if (scope.defaultScope)
          scope.checked = true;
        if (this._items.indexOf(scope.value) > -1)
          scope.checked = true;
      });
    });
  }

  public change(scope: ClientScope) {
    scope.checked = !scope.checked;
    if (scope.checked) {
      if (this._items.indexOf(scope.value) > -1) return;
      this._items.push(scope.value);
    } else {
      let index = this._items.indexOf(scope.value);
      if (index === -1) return;
      this._items.splice(index, 1);
    }
    this.itemsChange.emit(this._items);
  }

  public add() {
    if (!this.text) return;
    let scope = new Scope(this.text);
    this.scopeService.create(scope).subscribe((res: ClientScope) => {
      this.text = undefined;
      this.scopes.push(res);
    });
  }
}
