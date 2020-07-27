import { Injectable } from '@angular/core';
import { MoviesResultsArray } from '../../interfaces/movie-results-array/movie-results-array';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchedMoviesUrl = 'https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false';
  constructor(private http: HttpClient) { }

  getSearchedMovies(search: string) {
    return this.http.get<MoviesResultsArray>(this.searchedMoviesUrl + '&query=' + search );
  }
}

