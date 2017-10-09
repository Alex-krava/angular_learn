import { Component, EventEmitter, Input, Output } from '@angular/core';
import { typeHotels } from '../data/index';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  public filterMenuItems: string[] = typeHotels;

  @Input() public hotels: object[];
  @Input() public selectedHotel: object[];

  @Output() public clickHotel: EventEmitter<any> = new EventEmitter();
  @Output() public filterHotel: EventEmitter<any> = new EventEmitter();

  public constructor() {}

  public filterClick(type: string): void {
    this.filterHotel.emit(type);
  }

  public enterHotel(hotel: any): void {
    this.clickHotel.emit(hotel.social_info.title);
  }

}
