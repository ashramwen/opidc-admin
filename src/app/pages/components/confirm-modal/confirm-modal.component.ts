import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  public modalHeader: string;
  public modalContent: string;
  public confirmClass: string = 'primary';
  public confirmText: string;
  public confirm: Function;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() { }

  closeModal() {
    this.activeModal.close();
  }
}
