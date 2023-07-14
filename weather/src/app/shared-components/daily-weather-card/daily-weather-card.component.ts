import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-weather-card',
  templateUrl: './daily-weather-card.component.html',
  styleUrls: ['./daily-weather-card.component.css']
})
export class DailyWeatherCardComponent {
  @Input()
  dailyWeatherInformation:any={}
}
