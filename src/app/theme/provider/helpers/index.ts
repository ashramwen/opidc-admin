import { RequestOptions, XHRBackend } from '@angular/http';

import { BeehiveClient } from './beehive-client.service';
import { ConfigHelper } from './config-helper';
import { LocalStorageService } from 'angular-2-local-storage';
import { RequestHelper } from './request-helper';
import { RootState } from '../../redux/index';

export function beehiveClientFactory(backend, options, requestHelper, localStorageService) {
  return new BeehiveClient(backend, options, requestHelper, localStorageService);
}

export const HELPER_SERVICES = [
  {
    provide: BeehiveClient,
    deps: [
      XHRBackend,
      RequestOptions,
      RequestHelper,
      LocalStorageService
    ],
    useFactory: beehiveClientFactory
  },
  ConfigHelper,
  RequestHelper
];
