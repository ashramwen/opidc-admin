import { Client, Clients } from '../models/client.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ClientService } from '../services/client.service';
import { ConfirmModalComponent } from '../components/index';
import { PagerService } from './../services/pager.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: Clients;
  public pagedClient: Clients;
  public totalSize = 0;
  public page: number = 1;

  constructor(
    private modal: NgbModal,
    private clientService: ClientService,
    private pagerService: PagerService
  ) { }

  public ngOnInit() {
    this.getClients();
  }

  public refresh() {
    this.clients = undefined;
    this.pagedClient = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getClients();
  }

  public delete(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Delete client';
    activeModal.componentInstance.modalContent = 'Are you sure you would like to delete this client?';
    activeModal.componentInstance.confirmText = 'DELETE';
    activeModal.componentInstance.confirmClass = 'danger';
    activeModal.componentInstance.confirm = this.deleteClient.bind(this, activeModal, id);
  }

  public trackById(index: number, client: Client): number {
    return client.id;
  }

  public pageChange() {
    if (!this.clients) return;
    let pager = this.pagerService.getPager(this.clients.length, this.page);
    this.pagedClient = this.clients.slice(pager.startIndex, pager.endIndex + 1);
  }

  private deleteClient(activeModal: NgbModalRef, id: number) {
    this.clientService.delete(id).subscribe((res: Response) => {
      activeModal.close();
      this.refresh();
    });
  }

  private getClients() {
    this.clientService.get().subscribe((res: Clients) => {
      this.clients = res;
      this.totalSize = this.clients.length;
      this.pageChange();
    });
  }
}
