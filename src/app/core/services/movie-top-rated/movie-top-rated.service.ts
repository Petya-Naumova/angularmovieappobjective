import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesResultsArray } from '../../interfaces/movie-results-array/movie-results-array';

@Injectable({
  providedIn: 'root'
})
export class MovieTopRatedService {
  private topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?' + '&language=en-US&page=1';
  constructor(private http: HttpClient) { }
    getTopRateMovies() {
      return this.http.get<MoviesResultsArray>(this.topRatedMovieUrl);
  }
}
