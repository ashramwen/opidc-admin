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

  public pagedClient: Clients;
  public totalSize = 0;
  public page: number = 1;

  private clients: Clients;
  private filteredClient: Clients;

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
    this.filteredClient = undefined;
    this.pagedClient = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getClients();
  }

  public filtering(text: string) {
    text = text.toLocaleLowerCase();
    if (text) {
      this.filteredClient = this.clients.filter(c => {
        if (c.clientId && c.clientId.toLocaleLowerCase().indexOf(text) > -1) return true;
        if (c.clientName && c.clientName.toLocaleLowerCase().indexOf(text) > -1) return true;
        if (c.clientUri && c.clientUri.toLocaleLowerCase().indexOf(text) > -1) return true;
        if (c.scope && c.scope.find(s => { return s.toLocaleLowerCase().indexOf(text) > -1; })) return true;
        return false;
      });
    } else {
      this.filteredClient = this.clients;
    }
    this.totalSize = this.filteredClient.length;
    this.pageChange();
  }

  public delete(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Delete client';
    activeModal.componentInstance.modalContent = 'client.confirmDelete';
    activeModal.componentInstance.confirmText = 'DELETE';
    activeModal.componentInstance.confirmClass = 'danger';
    activeModal.componentInstance.confirm = this.deleteClient.bind(this, activeModal, id);
  }

  public trackById(index: number, client: Client): number {
    return client.id;
  }

  public pageChange() {
    if (!this.filteredClient) return;
    let pager = this.pagerService.getPager(this.filteredClient.length, this.page);
    this.pagedClient = this.filteredClient.slice(pager.startIndex, pager.endIndex + 1);
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
      this.filteredClient = this.clients;
      this.totalSize = this.filteredClient.length;
      this.pageChange();
    });
  }
}
