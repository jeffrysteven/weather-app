import { Base } from './base';
import { Main } from './main';
import { Weather } from './weather';
import { Wind } from './wind';

export interface WeatherForecastResponse {
  city: { name: string };
  cnt: number;
  list: City[];
}

export interface City extends Base {
  main: Main;
  name: string;
  weather: Weather[];
  wind: Wind;
  dt_txt?: number;
  dt?: number;
}
