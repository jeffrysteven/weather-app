import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, take } from 'rxjs/operators';
import { City, WeatherForecastResponse } from '../../models/city';
import { WeatherService } from '../../services/weather.service';
import {
  GetCitiesWeather,
  GetCitiesWeatherFailure,
  GetCitiesWeatherSuccess,
  GetCityForecast,
  GetCityForecastSuccess,
  GetCityForecastFailure,
} from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  getCitiesWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCitiesWeather),
      concatMap(() =>
        this.weatherService.getCitiesWeather().pipe(
          map((cities: City[]) => GetCitiesWeatherSuccess({ cities })),
          catchError((error) => of(GetCitiesWeatherFailure({ error })))
        )
      )
    )
  );

  getCityForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCityForecast),
      concatMap(({ id }) =>
        this.weatherService.getCityWeather(id).pipe(
          map((forecast: WeatherForecastResponse) =>
            GetCityForecastSuccess({ forecast })
          ),
          catchError((error) => of(GetCityForecastFailure({ error })))
        )
      )
    )
  );
}
