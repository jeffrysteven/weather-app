import * as Highcharts from 'highcharts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.scss'],
})
export class StackedAreaChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() title: string;
  @Input() categories: string[];
  @Input() yTitle: string;
  @Input() data: number[];
  @Input() xTitle: string;
  chartOptions: Highcharts.Options;

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: this.title,
      },
      xAxis: {
        categories: this.categories,
      },
      yAxis: {
        title: { text: this.yTitle },
      },
      series: [
        {
          type: 'area',
          name: this.xTitle,
          data: this.data,
        },
      ],
    };
  }
}
