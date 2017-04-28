import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnInit {

  @Input()
  public class: string;

  @Input()
  public items: any[];

  @Input()
  public model: string;

  @Input()
  public name: string;

  @Output()
  public onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public change(value: string) {
    this.model = value;
    this.onChange.emit(this.model);
  }
}
