export interface OpidcToken {
  value: string;
  id: number;
  scopes: string[];
  clientId: string;
  userId: string;
  expiration?: any;
}

export declare type OpidcTokens = OpidcToken[];
