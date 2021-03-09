import { createReducer, on } from '@ngrx/store';
import { City, WeatherForecastResponse } from '../../models/city';
import {
  GetCitiesWeather,
  GetCitiesWeatherFailure,
  GetCitiesWeatherSuccess,
  GetCityForecast,
  GetCityForecastSuccess,
} from '../actions/weather.actions';

export const stateKey = 'weather';

export interface State {
  cities: City[];
  forecast: WeatherForecastResponse;
  loading: boolean;
  error;
}

export const initialState: State = {
  cities: [],
  forecast: null,
  loading: false,
  error: null,
};

export const WeatherReducer = createReducer(
  initialState,
  on(GetCitiesWeather, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(GetCitiesWeatherSuccess, (state, { cities }) => ({
    ...state,
    loading: false,
    error: null,
    cities,
  })),
  on(GetCitiesWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(GetCityForecast, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(GetCityForecastSuccess, (state, { forecast }) => ({
    ...state,
    forecast,
    loading: false,
    error: null,
  }))
);
