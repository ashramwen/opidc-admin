import { ApprovedSite, ApprovedSites } from '../models/site.interface';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalComponent } from './../components/confirm-modal/confirm-modal.component';
import { DatePipe } from '@angular/common';
import { PagerService } from './../services/pager.service';
import { Response } from '@angular/http';
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
    private modal: NgbModal,
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

  public revoke(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Revoke site';
    activeModal.componentInstance.modalContent = 'Are you sure you want to revoke access to this site?';
    activeModal.componentInstance.confirmText = 'REVOKE';
    activeModal.componentInstance.confirmClass = 'danger';
    activeModal.componentInstance.confirm = this._revoke.bind(this, activeModal, id);
  }

  private _revoke(activeModal: NgbModalRef, id: number) {
    this.siteService.delete(id).subscribe((res: Response) => {
      activeModal.close();
      this.refresh();
    });
  }

  private getSite() {
    this.siteService.get().subscribe((res: ApprovedSites) => {
      this.sites = res;
      this.totalSize = this.sites.length;
      this.pageChange();
    });
  }
}
