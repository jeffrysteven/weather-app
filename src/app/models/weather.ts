import { Base } from './base';

export interface Weather extends Base {
  main: string;
  description: string;
  icon: string;
}
