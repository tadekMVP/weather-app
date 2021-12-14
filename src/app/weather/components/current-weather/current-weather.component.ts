import {Component, Input} from '@angular/core';
import {CurrentWeatherData} from "../../models/current-weather.data";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input() weatherData: CurrentWeatherData;

  constructor() {
  }
}
