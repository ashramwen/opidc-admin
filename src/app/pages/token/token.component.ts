import { Component, QueryList, ViewChildren } from '@angular/core';

import { TokenListComponent } from './components/token-list/token-list.component';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {

  @ViewChildren(TokenListComponent)
  public tokenLists: QueryList<TokenListComponent>;

  constructor() { }

  public refresh() {
    this.tokenLists.forEach(o => o.refresh());
  }

  public filtering(text: string) {
    this.tokenLists.forEach(o => o.search = text);
  }

}
