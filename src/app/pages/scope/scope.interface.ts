export interface Scope {
  id: number;
  value: string;
  description: string;
  icon?: any;
  defaultScope: boolean;
  restricted: boolean;
  structured: boolean;
  structuredParamDescription?: any;
  structuredValue?: any;
}

export declare type Scopes = Scope[];
