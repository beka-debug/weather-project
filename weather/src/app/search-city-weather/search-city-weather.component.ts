import { Component } from '@angular/core';
import { ProxyService } from '../services/proxy.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-city-weather',
  templateUrl: './search-city-weather.component.html',
  styleUrls: ['./search-city-weather.component.css']
})
export class SearchCityWeatherComponent {
  constructor(private proxy:ProxyService, private http:HttpClient){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  showPosition(position: GeolocationPosition) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=ee5129172248b78db9fb062b4e656015`)
    .subscribe((data:any) => {
      console.log(data)
    })
  }
  city:string = ""
  searchCurrentWeather(){
     this.proxy.getCurrentWeather(this.city)
     .subscribe((data:any) =>{
      console.log(data)
     })
     console.log(this.city)
  }
}
