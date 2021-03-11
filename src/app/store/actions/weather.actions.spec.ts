import * as actions from './weather.actions';

describe('loadCities', () => {
  it('should return an action', () => {
    expect(actions.GetCitiesWeather().type).toBe(
      actions.CitiesWeatherActionTypes.GET_CITIES_WEATHER
    );
    expect(actions.GetCityForecast({ id: 1 }).type).toBe(
      actions.CitiesWeatherActionTypes.GET_CITY_FORECAST
    );
  });
});
