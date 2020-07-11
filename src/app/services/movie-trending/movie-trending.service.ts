import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../../interfaces/movie-model/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieTrendingService {

  constructor(private http: HttpClient) { }
  // https://api.themoviedb.org/3/trending/movie/week?api_key=a544e13f3a740ad4a35bfb4a9d4bc6ef
  private movieModelUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=a544e13f3a740ad4a35bfb4a9d4bc6ef';
  // private TrendingMovieResult: Observable<MovieModel>
  getTrendingMovies() { {
      return this.http.get<MovieModel>(this.movieModelUrl);
    }
  }
}
