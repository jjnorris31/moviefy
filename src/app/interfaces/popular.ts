import {Movie} from './movie';

export interface Popular {
  page:          number;
  results:        Movie[];
  total_results: number;
  total_pages:   number;
}
