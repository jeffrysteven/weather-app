import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetCityForecast } from '../../../store/actions/weather.actions';
import { City, WeatherForecastResponse } from '../../../models/city';
import { State } from '../../../store/reducers/weather.reducer';
import {
  selectCityForecast,
  selectLoading,
} from '../../../store/selector/weather.selectors';

@Component({
  selector: 'weather-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  forecast$: Observable<WeatherForecastResponse>;
  loading$: Observable<boolean>;
  winds: { categories: string[]; data: number[] };
  temperatures: { categories: string[]; data: number[] };

  /**
   * Creates an instance of CityComponent.
   * @param {Store<State>} store
   * @param {ActivatedRoute} route
   * @memberof CityComponent
   */
  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.forecast$ = this.store.pipe(
      select(selectCityForecast),
      map((forecast: WeatherForecastResponse) => {
        this.buildWindData(forecast);
        this.buildTemperatureData(forecast);
        return forecast;
      })
    );
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(GetCityForecast({ id }));
    });
  }

  /**
   * Build data for wind chart.
   *
   * @param {WeatherForecastResponse} { list }
   * @memberof CityComponent
   */
  buildWindData({ list }: WeatherForecastResponse): void {
    this.winds = list.reduce(
      (obj, { wind: { speed }, dt_txt }: City) => {
        obj['categories'] = [...obj['categories'], dt_txt];
        obj['data'] = [...obj['data'], speed];
        return obj;
      },
      { categories: [], data: [] }
    );
  }

  /**
   * Build data for temperature chart.
   *
   * @param {WeatherForecastResponse} { list }
   * @memberof CityComponent
   */
  buildTemperatureData({ list }: WeatherForecastResponse): void {
    this.temperatures = list.reduce(
      (obj, { main: { temp }, dt_txt }: City) => {
        obj['categories'] = [...obj['categories'], dt_txt];
        obj['data'] = [...obj['data'], Math.round(temp)];
        return obj;
      },
      { categories: [], data: [] }
    );
  }
}
