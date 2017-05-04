import { Injectable } from '@angular/core';
import { Role } from '../model/role.enum';

@Injectable()
export class MetaService {

  private metas: any;
  constructor() {
    this.metas = document.getElementsByTagName('meta');
  }

  public get(): any {
    let header = this.getHeader();
    let value = this.getValue();
    if (!header) return;
    if (!value) return;

    let obj: any = {};
    obj[header] = value;
    return obj;
  }

  public getHeader(): string {
    if (!this.metas['_csrf_header']) return;
    return this.metas['_csrf_header'].content;
  }

  public getValue(): string {
    if (!this.metas['_csrf']) return;
    return this.metas['_csrf'].content;
  }

  public getRole(): Role {
    let roles = (this.metas['_role'].content as string).replace(/[\[\] ]/g, '').split(',');
    let role = Role.NONE;
    roles.forEach(r => {
      role = (role | Role[r]);
    });
    return role;
  }
}
