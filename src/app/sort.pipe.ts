import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(value: Array<string>) {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    return value.sort(compare);
  }
}
