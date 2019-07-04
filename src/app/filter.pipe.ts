import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any, customFilter: any, defaultFilter: boolean): any {
    if (!customFilter) {
      return items;
    }

    if (!Array.isArray(items)) {
      return items;
    }

    if (customFilter && Array.isArray(items)) {
      let filterKeys = Object.keys(customFilter);

      if (defaultFilter) {
        return items.filter(item =>
          filterKeys.reduce((x, keyName) =>
            (x && new RegExp(customFilter[keyName], 'gi').test(item[keyName])) || customFilter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(customFilter[keyName], 'gi').test(item[keyName]) || customFilter[keyName] == "";
          });
        });
      }
    }
  }
}