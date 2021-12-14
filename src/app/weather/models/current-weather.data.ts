export interface CurrentMainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface CurrentWindData {
  speed: number;
  deg: number;
  gust: number;
}

export interface CurrentWeatherData {
  id: string;
  dt: number;
  timezone: number;
  main: CurrentMainData;
  wind: CurrentWindData;
}
