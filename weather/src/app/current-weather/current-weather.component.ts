import { Component, Input, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private proxy:ProxyService){}
  currentWeather:any={}
  ngOnInit(): void {
    this.proxy.todaysWeatherEmitter.subscribe((data:any) =>{
      this.currentWeather = data;
      console.log(this.currentWeather)  
    })
  }
   
}
