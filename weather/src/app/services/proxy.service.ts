import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  apiKey: string = "ee5129172248b78db9fb062b4e656015";
  units:string = "metric"
  todaysWeatherEmitter:EventEmitter<any> = new EventEmitter();
  dailyWeatherEmitter:EventEmitter<any> = new EventEmitter();
  cityNotFoundEmitter:EventEmitter<any> = new EventEmitter();
  notFound:boolean = false

  constructor(private http: HttpClient) { }

  getCurrentWeather(cityName: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${this.units}&appid=${this.apiKey}`);
  }

  getDailyWeather(cityName:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${this.units}&appid=${this.apiKey}`)
  }

  getCurrentCoordinates() {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const weatherObservable = this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${this.units}&appid=${this.apiKey}`);
            observer.next(weatherObservable);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }

  getCityNames(){
    return this.http.get("https://public.opendatasoft.com/api/metadata/1.0/basic/")
  }
  

}
