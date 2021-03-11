import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { WeatherEffects } from './weather.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../reducers/weather.reducer';
import { WeatherService } from 'src/app/services/weather.service';

describe('WeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: WeatherEffects;
  let weatherServiceSpy: WeatherService;

  beforeEach(() => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', {
      getCitiesWeather: () => of({}),
      getCityWeather: () => of({}),
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClientTestingModule,
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
});
