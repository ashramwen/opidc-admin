import { ApprovedSite, ApprovedSites } from '../models/site.interface';
import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { PagerService } from './../services/pager.service';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public sites: ApprovedSites;
  public pagedSites: ApprovedSites;
  public totalSize = 0;
  public page: number = 1;

  constructor(
    private datePipe: DatePipe,
    private siteService: SiteService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getSite();
  }

  public refresh() {
    this.sites = undefined;
    this.pagedSites = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getSite();
  }

  public pageChange() {
    let pager = this.pagerService.getPager(this.sites.length, this.page);
    this.pagedSites = this.sites.slice(pager.startIndex, pager.endIndex + 1);
  }

  public trackById(index: number, site: ApprovedSite): number {
    return site.id;
  }

  public showExpire(value) {
    return value ? this.datePipe.transform(value) : 'Never';
  }

  private getSite() {
    this.siteService.get().subscribe((res: ApprovedSites) => {
      this.sites = res;
      this.totalSize = this.sites.length;
      this.pageChange();
    });
  }
}
