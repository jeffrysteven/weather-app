import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { CityComponent } from './pages/city/city.component';
import { StackedAreaChartComponent } from './components/stacked-area-chart/stacked-area-chart.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    HomeComponent,
    CityComponent,
    StackedAreaChartComponent,
    LoadingIndicatorComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    SharedModule,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    CityComponent,
  ],
})
export class CoreModule {}
