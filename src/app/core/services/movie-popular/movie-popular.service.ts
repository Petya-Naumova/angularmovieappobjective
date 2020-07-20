import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesResultsArray } from '../../interfaces/movie-results-array/movie-results-array';

@Injectable({
  providedIn: 'root'
})
export class MoviePopularService {
  private popularMovieUrl = 'https://api.themoviedb.org/3/movie/popular?' + '&language=en-US&page=1';
  constructor(private http: HttpClient) { }
    getPopularMovies() { {
      return this.http.get<MoviesResultsArray>(this.popularMovieUrl);
    }
  }
}
