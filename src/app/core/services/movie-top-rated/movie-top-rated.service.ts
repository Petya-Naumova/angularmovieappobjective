import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesResultsArray } from '../../interfaces/movie-results-array/movie-results-array';

@Injectable({
  providedIn: 'root'
})
export class MovieTopRatedService {
  private apiKey  = 'api_key=a544e13f3a740ad4a35bfb4a9d4bc6ef';
  private topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?' + this.apiKey + '&language=en-US&page=1';
  constructor(private http: HttpClient) { }
    getTopRateMovies() { {
      return this.http.get<MoviesResultsArray>(this.topRatedMovieUrl);
    }
  }
}
