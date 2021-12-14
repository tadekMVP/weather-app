import {Component, Input, OnInit} from '@angular/core';
import {HourlyForecastData} from "../../models/forecast.data";
import {formatDate} from "../../../../utils/helpers";

@Component({
  selector: 'app-hourly-forecast-list',
  templateUrl: './hourly-forecast-list.component.html',
  styleUrls: ['./hourly-forecast-list.component.scss']
})
export class HourlyForecastListComponent implements OnInit {
  @Input() hourlyForecast: HourlyForecastData[];
  @Input() timezoneOffset: number;

  hoursArray: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.hourlyForecast.forEach(item => {
      this.hoursArray.push(formatDate(item.dt, this.timezoneOffset));
    })
  }
}
