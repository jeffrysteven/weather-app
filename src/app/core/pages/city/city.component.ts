import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetCityForecast } from 'src/app/store/actions/weather.actions';
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
      if (id) {
        this.store.dispatch(GetCityForecast({ id }));
      }
    });
  }

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

  buildTemperatureData({ list }: WeatherForecastResponse): void {
    this.temperatures = list.reduce(
      (obj, { main: { temp }, dt_txt }: City) => {
        obj['categories'] = [...obj['categories'], dt_txt];
        obj['data'] = [...obj['data'], temp];
        return obj;
      },
      { categories: [], data: [] }
    );
  }
}
