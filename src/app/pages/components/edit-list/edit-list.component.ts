import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  public text: string;
  public placeholder: string = 'https://';

  @ViewChild('input')
  public input: ElementRef;

  @Input()
  public pattern: string;

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
  private inputEl: HTMLInputElement;

  constructor() {
  }

  ngOnInit() {
    this.inputEl = this.input.nativeElement;
    if (!this._items)
      this._items = [];
  }

  public add() {
    if (!this.text) return;
    if (!this.inputEl.checkValidity()) return;
    this._items.push(this.text);
    this.text = undefined;
    this.itemsChange.emit(this._items);
  }

  public del(index: number) {
    this._items.splice(index, 1);
    this.itemsChange.emit(this._items);
  }
}
