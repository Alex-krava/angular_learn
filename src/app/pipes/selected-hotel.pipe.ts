import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedHotel'
})
export class SelectedHotelPipe implements PipeTransform {

  public transform(value: object[], args?: string, type?: any): object {
    let hotels: object[] = value;

    if (type !== 'All Hotels') {
      hotels = value.filter((val: object) => this.filterHotelsFunction(val, type));
    }

    if (!args) {
      return hotels[0];
    } else {
      const filtered: object = hotels.filter((val: object) => this.filterFunction(val, args))[0];
      return filtered;
    }
  }

  public filterFunction(hotels: any, name: string): boolean {
    if (hotels.social_info.title === name) {
      return true;
    } else {
      return false;
    }
  }

  public filterHotelsFunction(hotels: any, type: string): boolean {
    if (hotels.type === type) {
      return true;
    } else {
      return false;
    }
  }

}
