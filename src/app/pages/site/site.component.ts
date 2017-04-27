import { Component, OnInit } from '@angular/core';

import { ApprovedSites } from './site.interface';
import { SiteService } from './site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public sites: any[];

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.getSite();
  }

  public refresh() {
    this.sites = undefined;
    this.getSite();
  }

  private getSite() {
    this.siteService.get().subscribe((res: ApprovedSites) => this.sites = res);
  }
}
