export interface HourlyForecastData {
  temp: number;
  wind_speed: number
  dt: number;
}

export interface ForecastData {
  hourly: HourlyForecastData[];
  timezone_offset: number;
}
