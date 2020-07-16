import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviePopularService} from '../../../core/services/movie-popular/movie-popular.service';
import { MovieTopRatedService } from '../../../core/services/movie-top-rated/movie-top-rated.service';
import { MovieModel } from '../../../core/interfaces/movie-model/movie-model';


@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.scss']
})
export class MovieComponent implements OnInit {
  public receivedPopularMovies: MovieModel[] = [];
  public receivedTopRatedMovies: MovieModel[] = [];
  constructor(private moviePopularService: MoviePopularService,
              private movieTopRatedService: MovieTopRatedService,
              private router: Router) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {

    if (this.router.url === '/popular') {
      this.moviePopularService.getPopularMovies()
        .subscribe(responseData => this.receivedPopularMovies = responseData.results);
    }
    if (this.router.url === '/top-rated') {
      this.movieTopRatedService.getTopRateMovies()
        .subscribe(responseData => this.receivedTopRatedMovies = responseData.results);
    }
  }
}
