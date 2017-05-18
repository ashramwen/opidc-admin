import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.html',
  styleUrls: ['./search-panel.scss']
})
export class SearchPanelComponent {

  @Input()
  public get search(): string {
    return this._search;
  }
  public set search(val: string) {
    this._search = val;
    this.searchChange.emit(this._search);
    this.filterChange.emit(this._search);
  }

  @Output()
  public searchChange = new EventEmitter<string>();

  @Output()
  public filterChange = new EventEmitter<string>();

  private _search: string;
}
