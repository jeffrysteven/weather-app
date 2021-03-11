import * as fromCity from './weather.actions';

describe('loadCities', () => {
  it('should return an action', () => {
    expect(fromCity.GetCitiesWeather().type).toBe(
      fromCity.CitiesWeatherActionTypes.GET_CITIES_WEATHER
    );
  });
});
