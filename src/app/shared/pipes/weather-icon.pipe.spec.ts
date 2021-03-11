import { WeatherIconPipe } from './weather-icon.pipe';

describe('WeatherIconPipe', () => {
  let pipe: WeatherIconPipe;
  it('create an instance', () => {
    pipe = new WeatherIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('return a valid OW weather icon url from an OW icon code', () => {
    // large icon
    expect(pipe.transform('test')).toEqual(
      'http://openweathermap.org/img/wn/test@4x.png'
    );
    // small icon
    expect(pipe.transform('test', 'small')).toEqual(
      'http://openweathermap.org/img/wn/test@2x.png'
    );
  });
});
