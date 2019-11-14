import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'shared'
})
export class SharedPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args === 'yearcheck1') {
      if (value) {
        return moment(value).format('YYYY년 M월~');
      }
      return '-';
    }
    if (args === 'yearcheck2') {
      if (value) {
        const date = moment(value).format('YYYY');
        const todayYear = moment(new Date()).format('YYYY');
        const result = ' (' + (Number(todayYear) - Number(date) + 1) + '년차)';
        return result;
      }
      return '';
    }
    return value;
  }
}
