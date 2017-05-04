import { Scope } from './scope.model';

export class ClientScope extends Scope {
  checked?: boolean;
}

export declare type ClientScopes = ClientScope[];
