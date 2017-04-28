import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()
  public checked: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Input()
  public value: string;

  @Input()
  public text: string;

  @Output()
  public onChange = new EventEmitter<[string, boolean]>();

  constructor() { }

  ngOnInit() {
  }

  public click() {
    this.checked = !this.checked;
    this.onChange.emit([this.value, this.checked]);
  }
}
