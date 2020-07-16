import { MovieModel } from '../movie-model/movie-model';

export interface MoviesResultsArray {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
