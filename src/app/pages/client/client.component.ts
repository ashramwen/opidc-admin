import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';
import { Clients } from './client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public settings = {
    hideSubHeader: true,
    sort: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        sort: false,
      },
      firstName: {
        title: 'Client',
        type: 'string',
        sort: false,
      },
      lastName: {
        title: 'Information',
        type: 'string',
        sort: false,
      },
      username: {
        title: 'Action',
        sort: false
      }
    }
  };

  public clients: Clients;

  constructor(
    private clientService: ClientService
  ) {

  }

  public ngOnInit() {
    this.getClients();
  }

  public refresh() {
    this.clients = undefined;
    this.getClients();
  }

  private getClients() {
    this.clientService.get().subscribe((res: Clients) => this.clients = res);
  }
}
