import {Injectable} from '@angular/core';
import {LocationData} from '../models/location.data';

const MOCKED_CITIES_LIST: LocationData[] = [
  {
    name: 'London',
    id: '2643743',
    coord: {
      lat: 51.5085,
      lon: -0.1257
    }
  },
  {
    name: 'Warsaw',
    id: '756135',
    coord: {
      lat: 52.2298,
      lon: 21.0118
    }
  },
  {
    name: 'Rome',
    id: '3169070',
    coord: {
      lat: 41.8947,
      lon: 12.4839
    }
  },
  {
    name: 'Moscow',
    id: '524894',
    coord: {
      lon: 37.606667,
      lat: 55.761665
    }
  },
  {
    name: 'Madrid',
    id: '3117735',
    coord: {
      lat: 40.4165,
      lon: -3.7026
    }
  },
];

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {
  }

  getLocations(): Promise<LocationData[]> {
    return Promise.resolve(MOCKED_CITIES_LIST);
  }

}
