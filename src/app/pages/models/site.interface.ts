export interface ApprovedSite {
  id: number;
  userId: string;
  clientId: string;
  creationDate: Date | string;
  accessDate: Date | string;
  timeoutDate?: Date | string;
  allowedScopes: string[];
}

export declare type ApprovedSites = ApprovedSite[];
