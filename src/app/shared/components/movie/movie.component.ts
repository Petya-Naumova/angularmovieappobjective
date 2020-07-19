import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MoviePopularService} from '../../../core/services/movie-popular/movie-popular.service';
import { MovieTopRatedService } from '../../../core/services/movie-top-rated/movie-top-rated.service';
import { MovieDetailsService } from '../../../core/services/movie-details/movie-details.service';
import { MovieModel } from '../../../core/interfaces/movie-model/movie-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public receivedPopularMovies: MovieModel[] = [];
  public receivedTopRatedMovies: MovieModel[] = [];

  @Input() modalTranscludableAreaType: 'top-rated'| 'popular';
  constructor(private moviePopularService: MoviePopularService,
              private movieTopRatedService: MovieTopRatedService,
              private movieDetailsService: MovieDetailsService,
              private router: Router,
              public dialog: MatDialog) {
  }

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

  openDialog(movieId): void {
    this.movieDetailsService.getMovieDetails(movieId)
      .subscribe(responseData => {
        console.log(responseData);
        this.dialog.open(MovieDetailsComponent, {
          height: '400px',
          width: '600px',
          data: { model : responseData, modalMiddlePart: this.modalTranscludableAreaType }
        });
      });
  }
}
