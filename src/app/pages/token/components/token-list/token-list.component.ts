import { Component, Input, OnInit } from '@angular/core';
import { OpidcToken, OpidcTokens } from '../../../models/token.interface';

import { PagerService } from './../../../services/pager.service';

@Component({
  selector: 'token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {

  @Input()
  public get tokens() {
    return this._tokens;
  }

  public set tokens(value) {
    this._tokens = value;
    if (this._tokens)
      this.totalSize = this._tokens.length;
    else
      this.totalSize = 0;
    this.page = 1;
    this.pageChange();
  }

  public pagedTokens: OpidcTokens;
  public totalSize: number = 0;
  public page: number = 1;

  private _tokens: OpidcTokens;

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
  }

  public trackById(index: number, token: OpidcToken): number {
    return token.id;
  }

  public pageChange() {
    if (!this.tokens) return;
    let pager = this.pagerService.getPager(this.tokens.length, this.page);
    this.pagedTokens = this.tokens.slice(pager.startIndex, pager.endIndex + 1);
  }
}
