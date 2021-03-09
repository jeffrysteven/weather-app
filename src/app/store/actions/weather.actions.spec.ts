import * as fromCity from './weather.actions';

describe('loadCities', () => {
  it('should return an action', () => {
    expect(fromCity.loadCitiesWeather().type).toBe('[City] Load Citys');
  });
});
