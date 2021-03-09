import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [WeatherIconPipe],
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    WeatherIconPipe,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HighchartsChartModule,
  ],
})
export class SharedModule {}
