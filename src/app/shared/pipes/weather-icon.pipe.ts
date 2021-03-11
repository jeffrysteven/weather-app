import { Pipe, PipeTransform } from '@angular/core';
import { getIconUrl } from '../utils/utils';

@Pipe({
  name: 'weatherIcon',
})
export class WeatherIconPipe implements PipeTransform {
  transform(value: string, size: 'small' | 'large' = 'large'): unknown {
    return getIconUrl(value, size);
  }
}
