import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieModel} from '../../interfaces/movie-model/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private apiKey  = '?api_key=a544e13f3a740ad4a35bfb4a9d4bc6ef';
  private movieDetailsUrl = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId) {
    return this.http.get<MovieModel>(this.movieDetailsUrl + movieId + this.apiKey + '&language=en-US');
  }
}
