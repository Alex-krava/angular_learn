import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowersComponent } from './followers/followers.component';
import { HotelsPipe } from './pipes/hotels.pipe';
import { SelectedHotelPipe } from './pipes/selected-hotel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    FollowersComponent,
    HotelsPipe,
    SelectedHotelPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
