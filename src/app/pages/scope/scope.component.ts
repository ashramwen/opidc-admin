import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalComponent } from './../components/confirm-modal/confirm-modal.component';
import { Response } from '@angular/http';
import { ScopeService } from '../services/scope.service';
import { Scopes } from '../models/scope.model';

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

  public delete(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Delete client';
    activeModal.componentInstance.modalContent = 'Are you sure you would like to delete this scope? Clients that have this scope will still be able to ask for it.';
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
