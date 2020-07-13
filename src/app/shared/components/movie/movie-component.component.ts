import { Component, OnInit } from '@angular/core';
import { MovieTrendingService} from '../../../core/services/movie-trending/movie-trending.service';
import { TrendingMovieResult } from '../../../core/interfaces/movie-trending-result/trending-movie-result';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.scss']
})
export class MovieComponent implements OnInit {
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
