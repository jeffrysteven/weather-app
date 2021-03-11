import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { citiesWeatherMock, cityWeatherMock } from '../shared/utils/mocks';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cities weather', (done) => {
    httpClientSpy.get.and.returnValue(of(citiesWeatherMock));
    service.getCitiesWeather().subscribe((data) => {
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(data.length).toEqual(2);
      done();
    });
  });

  it('should get city forecast', (done) => {
    httpClientSpy.get.and.returnValue(of(cityWeatherMock));
    service.getCityWeather(1).subscribe((data) => {
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(data.city.name).toEqual('Madrid');
      done();
    });
  });
});
