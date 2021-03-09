import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { GetCitiesWeather } from 'src/app/store/actions/weather.actions';
import { State } from 'src/app/store/reducers/weather.reducer';
import {
  selectCitiesWeather,
  selectLoading,
} from 'src/app/store/selector/weather.selectors';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities$: Observable<City[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.cities$ = this.store.pipe(select(selectCitiesWeather));
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    this.store.dispatch(GetCitiesWeather());
  }
}
