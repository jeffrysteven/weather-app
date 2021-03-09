import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { City, WeatherForecastResponse } from '../models/city';
import { endpoints, cities, units } from '../constants';
import { buildCityObject, buildHttpParams } from '../shared/utils/utils';

/**
 * Weather Service for HTTP Calls.
 *
 * @export
 * @class WeatherService
 */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  /**
   * OW API URI
   *
   * @private
   * @type {string}
   * @memberof WeatherService
   */
  private API_URL: string = environment.API_URL;

  /**
   * OW API KEY
   *
   * @private
   * @type {string}
   * @memberof WeatherService
   */
  private API_KEY: string = environment.API_KEY;

  /**
   * Creates an instance of WeatherService.
   * @param {HttpClient} http
   * @memberof WeatherService
   */
  constructor(private http: HttpClient) {}

  /**
   * Gets Cities Weather
   *
   * @return {*}  {Observable<City[]>}
   * @memberof WeatherService
   */
  getCitiesWeather(): Observable<City[]> {
    const params = buildHttpParams({
      id: cities.join(','),
      units,
      appid: this.API_KEY,
    });

    return this.http
      .get<WeatherForecastResponse>(
        `${this.API_URL}${endpoints.CITIES_WEATHER}`,
        {
          params,
        }
      )
      .pipe(
        map(({ list }: WeatherForecastResponse): City[] =>
          list.map(buildCityObject)
        )
      );
  }

  /**
   * Get City Forecast
   *
   * @param {number} id
   * @return {*}  {Observable<WeatherForecastResponse[]>}
   * @memberof WeatherService
   */
  getCityWeather(id: number): Observable<WeatherForecastResponse> {
    const params = buildHttpParams({
      id: `${id}`,
      units,
      appid: this.API_KEY,
    });
    return this.http
      .get<WeatherForecastResponse>(`${this.API_URL}${endpoints.FORECAST}`, {
        params,
      })
      .pipe(
        map(
          ({
            list,
            cnt,
            city,
          }: WeatherForecastResponse): WeatherForecastResponse => ({
            city,
            cnt,
            list: list.map(buildCityObject),
          })
        )
      );
  }
}
