/* eslint-disable camelcase */
interface SysTypes {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface CloudsTypes {
  all: number;
}

interface WindTypes {
  speed: number;
  deg: number;
}

interface MainTypes {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherTypes {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CoordTypes {
  lon: number;
  lat: number;
}

export interface LocationWeatherResponseTypes {
  cod: string;
  name: string;
  id: number;
  timezone: number;
  sys: SysTypes;
  dt: number;
  clouds: CloudsTypes;
  wind: WindTypes;
  visibility: number;
  main: MainTypes;
  base: string;
  weather: WeatherTypes[];
  coord: CoordTypes;
}
