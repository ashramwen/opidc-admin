export interface ApprovedSite {
  id: number;
  userId: string;
  clientId: string;
  creationDate: Date;
  accessDate: Date;
  timeoutDate?: any;
  allowedScopes: string[];
}

export declare type ApprovedSites = ApprovedSite[];
