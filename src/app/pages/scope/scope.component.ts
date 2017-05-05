import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Scope, Scopes } from '../models/scope.model';

import { ConfirmModalComponent } from './../components/confirm-modal/confirm-modal.component';
import { Response } from '@angular/http';
import { ScopeService } from '../services/scope.service';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  public scopes: any[];
  constructor(
    private modal: NgbModal,
    private scopeService: ScopeService
  ) { }

  ngOnInit() {
    this.getScope();
  }

  public refresh() {
    this.scopes = undefined;
    this.getScope();
  }

  public trackById(index: number, scope: Scope): number {
    return scope.id;
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
    this.scopeService.get().subscribe((res: Scopes) => this.scopes = res);
  }
}
