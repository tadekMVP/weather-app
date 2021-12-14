import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../services/location.service";
import {LocationData} from "../../models/location.data";
import {WeatherService} from "../../services/weather.service";
import {CurrentWeatherData} from "../../models/current-weather.data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  locations: LocationData[] = [];
  currentWeatherMap: Record<string, CurrentWeatherData> = {};

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.locationService.getLocations().then(async locations => {
      this.locations = locations;
      const _currentWeatherArray = await Promise.all(locations.map(location => this.weatherService.getWeatherForCity(location.id)));
      _currentWeatherArray.forEach(item => {
        this.currentWeatherMap[item.id] = item;
      });
    })
  }
}
