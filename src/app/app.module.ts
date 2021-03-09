import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WeatherService } from './services/weather.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { WeatherReducer } from './store/reducers/weather.reducer';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ weather: WeatherReducer }, {}),
    CoreModule,
    FontAwesomeModule,
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
    EffectsModule.forRoot([WeatherEffects]),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
