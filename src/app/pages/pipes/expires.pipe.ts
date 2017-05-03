import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expires'
})
export class ExpiresPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value || 'Never';
  }

}
