import { Component } from '@angular/core';
import { hotels } from './data/index';
import { typeHotels } from './data/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: object[] = hotels;
  public selectedHotel: object = hotels[0];
  public hotelType: string = typeHotels[0];
  public hotelName: string;

  public setSelectedHotel(event: any): void {
    this.selectedHotel = event;
    this.hotelName = event;
  }

  public setHotelType(event: string): void {
    this.hotelType = event;
    this.hotelName = '';
  }
}
