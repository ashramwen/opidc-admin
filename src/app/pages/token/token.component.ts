import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { TokenListComponent } from './components/token-list/token-list.component';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  @ViewChildren(TokenListComponent)
  public tokenLists: QueryList<TokenListComponent>;

  constructor() { }

  ngOnInit() {
  }

  public refresh() {
    this.tokenLists.forEach(o => o.refresh());
  }
}
