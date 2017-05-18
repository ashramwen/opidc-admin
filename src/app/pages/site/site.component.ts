import { ApprovedSite, ApprovedSites } from '../models/site.interface';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalComponent } from './../components/confirm-modal/confirm-modal.component';
import { PagerService } from './../services/pager.service';
import { Response } from '@angular/http';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public pagedSites: ApprovedSites;
  public totalSize = 0;
  public page: number = 1;

  private sites: ApprovedSites;
  private filtered: ApprovedSites;

  constructor(
    private modal: NgbModal,
    private siteService: SiteService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getSite();
  }

  public refresh() {
    this.sites = undefined;
    this.filtered = undefined;
    this.pagedSites = undefined;
    this.page = 1;
    this.totalSize = 0;
    this.getSite();
  }

  public pageChange() {
    let pager = this.pagerService.getPager(this.filtered.length, this.page);
    this.pagedSites = this.filtered.slice(pager.startIndex, pager.endIndex + 1);
  }

  public trackById(index: number, site: ApprovedSite): number {
    return site.id;
  }

  public filtering(text: string) {
    text = text.toLocaleLowerCase();
    if (text) {
      this.filtered = this.sites.filter(o => {
        if (o.clientId.toLocaleLowerCase().indexOf(text) > -1) return true;
        if (o.allowedScopes.find(s => { return s.toLocaleLowerCase().indexOf(text) > -1; })) return true;
        return false;
      });
    } else {
      this.filtered = this.sites;
    }
    this.totalSize = this.filtered.length;
    this.pageChange();
  }

  public revoke(id: number) {
    let activeModal = this.modal.open(ConfirmModalComponent);
    activeModal.componentInstance.modalHeader = 'Revoke site';
    activeModal.componentInstance.modalContent = 'site.confirmRevoke';
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
      this.filtered = this.sites;
      this.totalSize = this.filtered.length;
      this.pageChange();
    });
  }
}
