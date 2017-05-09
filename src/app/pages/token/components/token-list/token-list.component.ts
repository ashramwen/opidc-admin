import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { OpidcToken, OpidcTokens } from '../../../models/token.interface';

import { ConfirmModalComponent } from './../../../components/confirm-modal/confirm-modal.component';
import { PagerService } from './../../../services/pager.service';
import { Response } from '@angular/http';
import { TokenService } from './../../../services/token.service';

@Component({
  selector: 'token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {

  @Input()
  public type: string;

  public pagedTokens: OpidcTokens;
  public totalSize: number = 0;
  public page: number = 1;

  private tokens: OpidcTokens;

  constructor(
    private modal: NgbModal,
    private tokenService: TokenService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  public refresh() {
    this.tokens = undefined;
    this.pagedTokens = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getToken();
  }

  public trackById(index: number, token: OpidcToken): number {
    return token.id;
  }

  public pageChange() {
    if (!this.tokens) return;
    let pager = this.pagerService.getPager(this.tokens.length, this.page);
    this.pagedTokens = this.tokens.slice(pager.startIndex, pager.endIndex + 1);
  }

  public revoke(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Revoke token';
    activeModal.componentInstance.modalContent = 'token.confirmRevoke';
    activeModal.componentInstance.confirmText = 'REVOKE';
    activeModal.componentInstance.confirmClass = 'danger';
    activeModal.componentInstance.confirm = this._revoke.bind(this, activeModal, id);
  }

  private _revoke(activeModal: NgbModalRef, id: number) {
    this.tokenService.delete(this.type, id).subscribe((res: Response) => {
      activeModal.close();
      this.refresh();
    });
  }

  private getToken() {
    this.tokenService.getToken(this.type)
      .subscribe((res: OpidcTokens) => {
        this.tokens = res;
        this.totalSize = this.tokens.length;
        this.pageChange();
      });
  }
}
