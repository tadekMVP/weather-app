import { Injectable } from '@angular/core';
import {AppHttpService} from "../../services/http.service";
import {environment} from "../../../environments/environment";
import {CurrentWeatherData} from "../models/current-weather.data";
import {ForecastData} from "../models/forecast.data";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static buildUrl(url: string): string {
    const {openWeatherApiKey} = environment;
    return `${url}&appid=${openWeatherApiKey}&units=metric`;
  }

  constructor(
    private appHttp: AppHttpService
  ) { }

  getWeatherForCity(cityId: string): Promise<CurrentWeatherData> {
    return this.appHttp.get(WeatherService.buildUrl(`/api/weather?id=${cityId}`)).toPromise();
  }

  getForecastForArea(lat: number, lon: number): Promise<ForecastData> {
    return this.appHttp.get(WeatherService.buildUrl(`/api/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`)).toPromise();
  }

}
