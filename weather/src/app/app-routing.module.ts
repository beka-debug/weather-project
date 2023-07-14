import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';

const routes: Routes = [
  {path:'',component:SearchCityWeatherComponent,children:[
    {path:'current',component:CurrentWeatherComponent},
    {path:'daily',component:DailyWeatherComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
