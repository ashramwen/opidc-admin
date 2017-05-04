import 'rxjs/add/operator/catch';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Scope } from './../../../models/scope.model';
import { ScopeService } from '../../../services/scope.service';

@Component({
  selector: 'app-manage-scope',
  templateUrl: './manage-scope.component.html',
  styleUrls: ['./manage-scope.component.scss']
})
export class ManageScopeComponent implements OnInit {

  @Input()
  public scope: Scope;

  private id?: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modal: NgbModal,
    private scopeService: ScopeService
  ) {
    this.scope = new Scope();
    this.activatedRoute.params
      .flatMap((params: Params) => {
        this.id = +params['id'];
        if (this.id) {
          // edit
          return this.scopeService.getById(this.id);
        } else {
          // new
          return Observable.of(new Scope());
        }
      })
      .subscribe((res: Scope) => this.scope = res);
  }

  public ngOnInit() {
  }

  public save() {
    if (!this.scope.value) return;
    this._save()
      .subscribe(res => {
        this.router.navigate(['pages', 'scope']);
      });
  }

  private _save() {
    if (this.id) {
      return this.scopeService.update(this.scope);
    } else {
      return this.scopeService.create(this.scope);
    }
  }
}
