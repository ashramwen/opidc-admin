import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent implements OnInit {

  @Input()
  public class: string;

  @Input()
  public items: any[];

  @Input()
  public model: string[];

  constructor() { }

  ngOnInit() {
  }

  public checkValue(value: string): boolean {
    return this.model.indexOf(value) > -1;
  }

  public change(value: [string, boolean]) {
    let index = this.model.indexOf(value[0]);
    if (value[1]) {
      if (index > -1) return;
      this.model.push(value[0]);
    } else {
      if (index === -1) return;
      this.model.splice(index, 1);
    }
  }
}
