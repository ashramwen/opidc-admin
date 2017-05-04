import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  public modalHeader: string;
  public modalContent: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() { }

  closeModal() {
    this.activeModal.close();
  }
}
