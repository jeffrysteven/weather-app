import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from '../reducers/weather.reducer';

export const selectState = createFeatureSelector<State>('weather');

export const selectCitiesWeather = createSelector(
  selectState,
  ({ cities }: State) => cities
);

export const selectCityForecast = createSelector(
  selectState,
  ({ forecast }: State) => forecast
);

export const selectLoading = createSelector(
  selectState,
  ({ loading }: State) => loading
);
