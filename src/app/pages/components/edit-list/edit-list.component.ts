import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  public uri: string;

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

  constructor() {
  }

  ngOnInit() {
    if (!this._items)
      this._items = [];
  }

  public add() {
    if (!this.uri) return;
    this._items.push(this.uri);
    this.uri = undefined;
    this.itemsChange.emit(this._items);
  }

  public del(index: number) {
    this._items.splice(index, 1);
    this.itemsChange.emit(this._items);
  }
}
