import { Client, Clients } from '../models/client.model';
import { Component, OnInit } from '@angular/core';

import { ClientService } from '../services/client.service';
import { PagerService } from './../services/pager.service';
import { Router } from '@angular/router';

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
    private router: Router,
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

  public new() {
    this.router.navigate(['new']);
  }

  public edit(id) {

  }

  public delete(id) {

  }

  public trackById(index: number, client: Client): number {
    return client.id;
  }

  public pageChange() {
    let pager = this.pagerService.getPager(this.clients.length, this.page);
    this.pagedClient = this.clients.slice(pager.startIndex, pager.endIndex + 1);
  }

  private getClients() {
    this.clientService.get().subscribe((res: Clients) => {
      this.clients = res;
      this.totalSize = this.clients.length;
      this.pageChange();
    });
  }

  // Are you sure sure you would like to delete this client?
}
