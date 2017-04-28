import { Component, OnInit } from '@angular/core';

import { ClientService } from '../services/client.service';
import { Clients } from '../models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: Clients;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }

  public ngOnInit() {
    this.getClients();
  }

  public refresh() {
    this.clients = undefined;
    this.getClients();
  }

  public new() {
    this.router.navigate(['new']);
  }

  public edit(id) {

  }

  public delete(id) {

  }

  private getClients() {
    this.clientService.get().subscribe((res: Clients) => this.clients = res);
  }
}
