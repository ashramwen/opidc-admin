import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Scope, Scopes } from '../models/scope.model';

import { ConfirmModalComponent } from './../components/confirm-modal/confirm-modal.component';
import { PagerService } from './../services/pager.service';
import { Response } from '@angular/http';
import { ScopeService } from '../services/scope.service';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  public pagedScopes: Scopes;
  public totalSize = 0;
  public page: number = 1;

  private scopes: Scopes;
  private filtered: Scopes;

  constructor(
    private modal: NgbModal,
    private scopeService: ScopeService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getScope();
  }

  public refresh() {
    this.scopes = undefined;
    this.filtered = undefined;
    this.pagedScopes = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getScope();
  }

  public pageChange() {
    let pager = this.pagerService.getPager(this.filtered.length, this.page);
    this.pagedScopes = this.filtered.slice(pager.startIndex, pager.endIndex + 1);
  }

  public trackById(index: number, scope: Scope): number {
    return scope.id;
  }

  public filtering(text: string) {
    text = text.toLocaleLowerCase();
    if (text) {
      this.filtered = this.scopes.filter(o => {
        if (o.value.toLocaleLowerCase().indexOf(text) > -1) return true;
        if (o.description && o.description.toLocaleLowerCase().indexOf(text) > -1) return true;
        return false;
      });
    } else {
      this.filtered = this.scopes;
    }
    this.totalSize = this.filtered.length;
    this.pageChange();
  }

  public delete(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Delete scope';
    activeModal.componentInstance.modalContent = 'scope.confirmDelete';
    activeModal.componentInstance.confirmText = 'DELETE';
    activeModal.componentInstance.confirmClass = 'danger';
    activeModal.componentInstance.confirm = this._delete.bind(this, activeModal, id);
  }

  private _delete(activeModal: NgbModalRef, id: number) {
    this.scopeService.delete(id).subscribe((res: Response) => {
      activeModal.close();
      this.refresh();
    });
  }

  private getScope() {
    this.scopeService.get().subscribe((res: Scopes) => {
      this.scopes = res;
      this.filtered = this.scopes;
      this.totalSize = this.filtered.length;
      this.pageChange();
    });
  }
}
