export interface LocationCoords {
  lon: number;
  lat: number;
}

export interface LocationData {
  name: string;
  id: string;
  coord: LocationCoords;
}
