import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scope, Scopes } from './../../models/scope.interface';

import { ScopeService } from './../../services/scope.service';

@Component({
  selector: 'scope-list',
  templateUrl: './scope-list.component.html',
  styleUrls: ['./scope-list.component.scss']
})
export class ScopeListComponent implements OnInit {

  public text: string;
  public placeholder: string = 'https://';
  public scopes: Scopes;

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
  ) {
    this.scopeService.get()
      .subscribe((res: Scopes) => {
        this.scopes = res;
        this.scopes.forEach(scope => {
          scope.defaultScope && (scope.checked = true);
          this._items.forEach(str => {
            let find = this.scopes.find(o => o.value === str);
            find.checked = true;
          });
        });
      });
  }

  ngOnInit() {
    !this._items && (this._items = []);
  }

  public change(scope: Scope) {
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

  public onChange(value: any): void {
    console.log(value);
  }
}
