import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {AppCommonModule} from "../common/common.module";
import {ForecastComponent} from './components/forecast/forecast.component';
import {WeatherService} from "./services/weather.service";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {CurrentWeatherComponent} from './components/current-weather/current-weather.component';
import {HourlyForecastListComponent} from './components/hourly-forecast-list/hourly-forecast-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ForecastComponent,
    CurrentWeatherComponent,
    HourlyForecastListComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule {

}
