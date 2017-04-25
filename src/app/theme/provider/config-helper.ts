import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ConfigHelper {
  /**
   * @desc build api url
   * @param apiPath
   * @param paths
   * @return {string} url
   */
  public buildUrl(apiPath: string, paths: string[] = []): string {
    return [BASE_CONFIG.siteUrl, `api/${apiPath}`, ...paths].join('/');
  }
}
