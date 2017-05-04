export class Scope {
  id?: number;
  value: string;
  description?: string;
  icon?: any;
  defaultScope: boolean = false;
  restricted: boolean = false;
  structured?: boolean;
  structuredParamDescription?: any;
  structuredValue?: any;

  constructor(value: string = '') {
    this.value = value;
  }
}

export declare type Scopes = Scope[];
