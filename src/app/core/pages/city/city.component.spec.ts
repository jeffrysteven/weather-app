import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cityWeatherMock } from '../../../shared/utils/mocks';
import { initialState } from '../../../store/reducers/weather.reducer';

import { CityComponent } from './city.component';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({ initialState: { weather: { ...initialState } } }),
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build wind data for chart', () => {
    component.buildWindData(cityWeatherMock);
    expect(Object.keys(component.winds)).toContain('categories');
    expect(Object.keys(component.winds)).toContain('data');
    expect(component.winds.categories.length).toEqual(cityWeatherMock.cnt);
    expect(component.winds.data.length).toEqual(cityWeatherMock.cnt);
    expect(component.winds.categories).toEqual(
      cityWeatherMock.list.map((data) => data.dt_txt)
    );
    expect(component.winds.data).toEqual(
      cityWeatherMock.list.map((data) => data.wind.speed)
    );
  });

  it('should build temperature data for chart', () => {
    component.buildTemperatureData(cityWeatherMock);
    expect(Object.keys(component.temperatures)).toContain('categories');
    expect(Object.keys(component.temperatures)).toContain('data');
    expect(component.temperatures.categories.length).toEqual(
      cityWeatherMock.cnt
    );
    expect(component.temperatures.data.length).toEqual(cityWeatherMock.cnt);
    expect(component.temperatures.categories).toEqual(
      cityWeatherMock.list.map((data) => data.dt_txt)
    );
    expect(component.temperatures.data).toEqual(
      cityWeatherMock.list.map((data) => Math.round(data.main.temp))
    );
  });
});
