import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit{
  constructor(private proxy:ProxyService){}
  dailyWeatherArr:any[]=[]
  ngOnInit(): void {
    this.proxy.dailyWeatherEmitter.subscribe((data:any) =>{
      this.dailyWeatherArr = data.list;
      console.log(data.list)
    })
  }

}
