import {Component, Input, OnInit} from '@angular/core';
import {LocationCoords} from '../../models/location.data';
import {CurrentWeatherData} from "../../models/current-weather.data";
import {WeatherService} from "../../services/weather.service";
import {ForecastData} from "../../models/forecast.data";
import {formatDate} from "../../../../utils/helpers";

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() locationCoords: LocationCoords;
  @Input() weatherData: CurrentWeatherData;

  isLoading = false;
  forecast: ForecastData;
  hour: string;

  constructor(
    private weatherService: WeatherService
  ) {
  }

  async ngOnInit() {
    this.isLoading = true;
    this.forecast = await this.weatherService.getForecastForArea(this.locationCoords.lat, this.locationCoords.lon);
    this.hour = formatDate(this.weatherData.dt, this.weatherData.timezone);
    this.isLoading = false;
  }

}
