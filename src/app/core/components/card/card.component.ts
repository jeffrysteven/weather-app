import { Component, Input } from '@angular/core';
import { City } from '../../../models/city';
import { faWind, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() city: City;
  icons: {
    [icon: string]: IconDefinition;
  } = {
    faWind,
  };
}
