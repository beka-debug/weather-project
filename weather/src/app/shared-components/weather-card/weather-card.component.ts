import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.showCard = this.weatherInfo.hasOwnProperty("name");
  }
  showCard:boolean = true
  @Input()
  weatherInfo:any={}
}
