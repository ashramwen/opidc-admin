import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Role } from '../model/role.enum';

@Injectable()
export class MetaService {

  private csrf: {
    header: string,
    value: string
  };

  private role: Role;

  constructor(
    private meta: Meta
  ) { }

  public getCSRF(): any {
    let header = this.getHeader();
    let value = this.getValue();
    if (!header) return;
    if (!value) return;

    this.csrf = {
      header: header,
      value: value
    };
    return this.csrf;
  }

  public getRole(): Role {
    this.role = Role.NONE;
    let meta = this.getContentFromName('_role');
    if (meta) {
      let roles = meta.replace(/[\[\] ]/g, '').split(',');
      roles.forEach(r => {
        this.role = (this.role | Role[r]);
      });
    }
    return this.role;
  }

  private getHeader(): string {
    return this.getContentFromName('_csrf_header');
  }

  private getValue(): string {
    return this.getContentFromName('_csrf');
  }

  private getContentFromName(name: string): string {
    let metaTag = this.meta.getTag(`name="${name}"`);
    return metaTag ? metaTag.content : '';
  }
}
