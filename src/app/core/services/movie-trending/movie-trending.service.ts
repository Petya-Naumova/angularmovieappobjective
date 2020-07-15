import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../../interfaces/movie-model/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieTrendingService {
  private trendingMovieUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=a544e13f3a740ad4a35bfb4a9d4bc6ef';
  constructor(private http: HttpClient) { }
  getTrendingMovies() { {
      return this.http.get<MovieModel>(this.trendingMovieUrl);
    }
  }
}
