import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http:HttpClient) { }
  apiKey:string = "ee5129172248b78db9fb062b4e656015"

  getCurrentWeather(cityName:string){
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`)
     
     
  }
}
