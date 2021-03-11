import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { WeatherEffects } from './weather.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../reducers/weather.reducer';
import { WeatherService } from '../../services/weather.service';
import { citiesWeatherMock, cityWeatherMock } from '../../shared/utils/mocks';
import * as AppActions from '../actions/weather.actions';
import { SharedModule } from '../../shared/shared.module';

describe('WeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: WeatherEffects;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(() => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCitiesWeather',
      'getCityWeather',
    ]);
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        WeatherEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: WeatherService, useValue: weatherServiceSpy },
      ],
    });

    effects = TestBed.inject(WeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fire get cities weather', (done) => {
    weatherServiceSpy.getCitiesWeather.and.returnValue(of(citiesWeatherMock));
    actions$ = of(AppActions.GetCitiesWeather);
    effects.getCitiesWeather$.subscribe((res) => {
      expect(res).toEqual(
        AppActions.GetCitiesWeatherSuccess({ cities: citiesWeatherMock })
      );
      expect(weatherServiceSpy.getCitiesWeather).toHaveBeenCalledTimes(1);
      done();
    });
    weatherServiceSpy.getCitiesWeather.and.returnValue(throwError({}));
    effects.getCitiesWeather$.subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(
          AppActions.GetCitiesWeatherFailure({ error: {} })
        );
        expect(weatherServiceSpy.getCitiesWeather).toHaveBeenCalledTimes(1);
        done();
      }
    );
  });

  it('should fire get city forecast', (done) => {
    weatherServiceSpy.getCityWeather.and.returnValue(of(cityWeatherMock));
    actions$ = of(AppActions.GetCityForecast);
    effects.getCityForecast$.subscribe((res) => {
      expect(res).toEqual(
        AppActions.GetCityForecastSuccess({ forecast: cityWeatherMock })
      );
      expect(weatherServiceSpy.getCityWeather).toHaveBeenCalledTimes(1);
      done();
    });
    weatherServiceSpy.getCityWeather.and.returnValue(throwError({}));
    effects.getCityForecast$.subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(AppActions.GetCityForecastFailure({ error: {} }));
        expect(weatherServiceSpy.getCityWeather).toHaveBeenCalledTimes(1);
        done();
      }
    );
  });
});
