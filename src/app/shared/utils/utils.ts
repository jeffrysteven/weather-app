import { City } from '../../models/city';
import { HttpParams } from '@angular/common/http';

/**
 * Build HTTP params for Angular HTTP Client based in an object.
 *
 * @export
 * @param {{
 *   [param: string]: string;
 * }} params
 * @return {*}  {HttpParams}
 */
export function buildHttpParams(params: {
  [param: string]: string;
}): HttpParams {
  return new HttpParams().appendAll(params);
}

/**
 * Build a cleaned city object.
 *
 * @export
 * @param {City} { id, main, name, weather, wind }
 * @return {*}  {City}
 */
export function buildCityObject({
  id,
  main,
  name,
  weather,
  wind,
  dt_txt,
  dt,
}: City): City {
  return {
    id,
    main,
    name,
    weather,
    wind,
    dt_txt,
    dt,
  };
}

/**
 * Return icon code url.
 *
 * @export
 * @param {string} iconCode
 * @return {*}  {string}
 */
export function getIconUrl(
  iconCode: string,
  size: 'small' | 'large' = 'large'
): string {
  enum sizes {
    small = '2',
    large = '4',
  }
  return `http://openweathermap.org/img/wn/${iconCode}@${sizes[size]}x.png`;
}
