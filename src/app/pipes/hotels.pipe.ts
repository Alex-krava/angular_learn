import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotels'
})
export class HotelsPipe implements PipeTransform {

  public transform(value: object[], args: string = '') {
    if (args === 'All Hotels') {
      return value;
    } else {
      const filtered: object[] = value.filter((val: object) => this.filterFunction(val, args));
      return filtered;
    }
  }

  public filterFunction(hotels: any, type: string): boolean {
    if (hotels.type === type) {
      return true;
    } else {
      return false;
    }
  }

}
