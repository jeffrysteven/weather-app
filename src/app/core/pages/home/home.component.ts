import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from '../../../models/city';
import { GetCitiesWeather } from '../../../store/actions/weather.actions';
import { State } from '../../../store/reducers/weather.reducer';
import {
  selectCitiesWeather,
  selectLoading,
} from '../../../store/selector/weather.selectors';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities$: Observable<City[]>;
  loading$: Observable<boolean>;

  /**
   * Creates an instance of HomeComponent.
   * @param {Store<State>} store
   * @memberof HomeComponent
   */
  constructor(private store: Store<State>) {
    this.cities$ = this.store.pipe(select(selectCitiesWeather));
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    this.store.dispatch(GetCitiesWeather());
  }
}
