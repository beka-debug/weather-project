import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherCardComponent } from './shared-components/weather-card/weather-card.component';
import { DailyWeatherCardComponent } from './shared-components/daily-weather-card/daily-weather-card.component';
import { RoundPipe } from './pipes/round.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCityWeatherComponent,
    NavigationComponent,
    DailyWeatherComponent,
    CurrentWeatherComponent,
    WeatherCardComponent,
    DailyWeatherCardComponent,
    RoundPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
