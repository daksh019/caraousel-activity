import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { CaraouselSliderComponent } from './caraousel-slider/caraousel-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CaraouselComponent,
    CaraouselSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
