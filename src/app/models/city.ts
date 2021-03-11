import { Base } from './base';
import { Main } from './main';
import { Weather } from './weather';
import { Wind } from './wind';

export interface WeatherForecastResponse {
  cnt: number;
  list: City[];
  city?: { name: string };
}

export interface City extends Base {
  main: Main;
  name: string;
  weather: Weather[];
  wind: Wind;
  dt_txt?: string;
  dt?: number;
}
