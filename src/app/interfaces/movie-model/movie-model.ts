import { TrendingMovieResult } from '../movie-trending-result/trending-movie-result';

export interface MovieModel {
  page: number;
  results: TrendingMovieResult[];
  total_pages: number;
  total_results: number;
}
