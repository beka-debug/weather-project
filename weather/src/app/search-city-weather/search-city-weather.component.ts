import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-city-weather',
  templateUrl: './search-city-weather.component.html',
  styleUrls: ['./search-city-weather.component.css']
})
export class SearchCityWeatherComponent implements OnInit{
  city:string = ""
  currentLocationWeather:any={};
  cityArr:string[] = [];
  isEmpty:boolean = true;

  constructor(private proxy:ProxyService, private route:ActivatedRoute,private http:HttpClient){
    this.proxy.getCurrentCoordinates().subscribe((data:any)=>{
       data.subscribe((x:any)=>{
        this.currentLocationWeather = x;
       })
    })
  }
  ngOnInit(): void {
    this.proxy.getCityNames().subscribe((data:any)=>{
      this.cityArr = data[0].schema.filter((item:any)=> item.name == "timezone")[0].values
    })
  }


  searchCurrentWeather(){

     this.isEmpty = false
     if(this.city == ""){
      this.isEmpty = true
     }
    const childRoute = this.route.firstChild?.snapshot.routeConfig?.path;
    if(childRoute == "current"){
     this.proxy.getCurrentWeather(this.city)
     .subscribe((data:any) =>{
      this.proxy.todaysWeatherEmitter.emit(data)
     })
    }
    else if(childRoute == "daily"){
      this.proxy.getDailyWeather(this.city)
      .subscribe((data:any) =>{
        this.proxy.dailyWeatherEmitter.emit(data)
       })
    }
     
  }

  userChoosenCIty(){
    this.isEmpty = this.city.length > 0 ? false : true;
  }
}
