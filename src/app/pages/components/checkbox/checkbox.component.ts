import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()
  public value: string;

  @Input()
  public text: string;

  @Output()
  public checkedChange = new EventEmitter<boolean>();

  @Output()
  public disabledChange = new EventEmitter<boolean>();

  @Output()
  public onChange = new EventEmitter<[string, boolean]>();

  @Input()
  public get checked() {
    return this._checked;
  }

  public set checked(value) {
    this._checked = value;
    this.checkedChange.emit(this._checked);
  }

  @Input()
  public get disabled() {
    return this._disabled;
  }

  public set disabled(value) {
    this._disabled = value;
    this.disabledChange.emit(this._disabled);
  }

  private _checked: boolean = false;
  private _disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public click() {
    this.checked = !this.checked;
    this.onChange.emit([this.value, this._checked]);
  }
}
