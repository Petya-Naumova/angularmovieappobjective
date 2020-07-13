import { Component, OnInit } from '@angular/core';
import { MovieTrendingService} from '../services/movie-trending/movie-trending.service';
import {TrendingMovieResult} from '../interfaces/movie-trending-result/trending-movie-result';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public receivedTrendingMovies: TrendingMovieResult[] = [];
  constructor(private movieTrendingService: MovieTrendingService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.movieTrendingService.getTrendingMovies()
      .subscribe(responseData => this.receivedTrendingMovies = responseData.results);
  }
}
