import { City } from 'src/app/models/city';
import { buildCityObject, buildHttpParams, getIconUrl } from './utils';

describe('Utils', () => {
  it('should build http params', () => {
    const params = {
      name: 'test',
      appid: '123abc',
    };
    const fn = buildHttpParams(params);
    expect(fn.keys()).toContain('name', 'appid');
    expect(fn.has('name')).toBeTruthy();
    expect(fn.has('appid')).toBeTruthy();
  });

  it('should build weather icon url', () => {
    const icon = 'test';
    const fn = getIconUrl(icon);
    expect(fn).toEqual(`http://openweathermap.org/img/wn/${icon}@4x.png`);
  });

  it('should build city object', () => {
    const city = {
      clouds: {
        all: 75,
      },
      dt: 1615208982,
      id: 3117735,
      coord: {
        lon: -3.7026,
        lat: 40.4165,
      },
      name: 'Madrid',
      main: {
        temp: 13.28,
        feels_like: 11.32,
        temp_min: 11,
        temp_max: 16.11,
        humidity: 62,
      },
      sys: {
        country: 'ES',
        timezone: 3600,
        sunrise: 1615185463,
        sunset: 1615227220,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      wind: {
        speed: 1.54,
        deg: 0,
      },
    };
    const fn = buildCityObject(city);
    expect(fn).toEqual({
      id: city.id,
      main: city.main,
      name: city.name,
      weather: city.weather,
      wind: city.wind,
      dt_txt: undefined,
    });
  });
});
