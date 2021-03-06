import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input()
  public tags: string | string[];

  constructor() {
  }

  ngOnInit() {
    if (typeof this.tags === 'string') {
      this.tags = [this.tags];
    }
  }

}
