import { WeatherReducer, initialState } from './weather.reducer';
import * as AppActions from '../actions/weather.actions';
import { citiesWeatherMock, cityWeatherMock } from '../../shared/utils/mocks';

describe('Weather Reducer', () => {
  let result;
  it('should return the initial state', () => {
    result = WeatherReducer(initialState, {} as any);
    expect(result).toBe(initialState);
  });
  it('[GET_CITIES_WEATHER] action', () => {
    result = WeatherReducer(initialState, AppActions.GetCitiesWeather);
    expect(result.loading).toBe(true);
  });
  it('[GET_CITIES_WEATHER_SUCCESS] action', () => {
    result = WeatherReducer(
      initialState,
      AppActions.GetCitiesWeatherSuccess({ cities: citiesWeatherMock })
    );
    expect(result.loading).toBe(false);
    expect(result.cities).toEqual(citiesWeatherMock);
  });
  it('[GET_CITIES_WEATHER_FAIL] action', () => {
    result = WeatherReducer(
      initialState,
      AppActions.GetCitiesWeatherFailure({ error: {} })
    );
    expect(result.loading).toBe(false);
    expect(result.error).toEqual({});
  });
  it('[GET_CITY_FORECAST] action', () => {
    result = WeatherReducer(initialState, AppActions.GetCityForecast);
    expect(result.loading).toBe(true);
  });
  it('[GET_CITY_FORECAST_SUCCESS] action', () => {
    result = WeatherReducer(
      initialState,
      AppActions.GetCityForecastSuccess({ forecast: cityWeatherMock })
    );
    expect(result.loading).toBe(false);
    expect(result.forecast).toEqual(cityWeatherMock);
  });
});
