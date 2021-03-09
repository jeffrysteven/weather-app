import { createAction, props } from '@ngrx/store';
import { City, WeatherForecastResponse } from '../../models/city';

export enum CitiesWeatherActionTypes {
  GET_CITIES_WEATHER = '[CITIES] Get weather list',
  GET_CITIES_WEATHER_SUCCESS = '[CITIES] Get weather list success',
  GET_CITIES_WEATHER_FAIL = '[CITIES] Get weather fail',
  GET_CITY_FORECAST = '[CITIES] Get city forecast',
  GET_CITY_FORECAST_SUCCESS = '[CITIES] Get city forecast success',
  GET_CITY_FORECAST_FAIL = '[CITIES] Get city forecast fail',
}

export const GetCitiesWeather = createAction(
  CitiesWeatherActionTypes.GET_CITIES_WEATHER
);

export const GetCitiesWeatherSuccess = createAction(
  CitiesWeatherActionTypes.GET_CITIES_WEATHER_SUCCESS,
  props<{ cities: City[] }>()
);

export const GetCitiesWeatherFailure = createAction(
  CitiesWeatherActionTypes.GET_CITIES_WEATHER_FAIL,
  props<{ error }>()
);

export const GetCityForecast = createAction(
  CitiesWeatherActionTypes.GET_CITY_FORECAST,
  props<{ id: number }>()
);

export const GetCityForecastSuccess = createAction(
  CitiesWeatherActionTypes.GET_CITY_FORECAST_SUCCESS,
  props<{ forecast: WeatherForecastResponse }>()
);

export const GetCityForecastFailure = createAction(
  CitiesWeatherActionTypes.GET_CITY_FORECAST_FAIL,
  props<{ error }>()
);
