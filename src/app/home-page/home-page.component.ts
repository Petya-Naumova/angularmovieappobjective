import { Component, OnInit } from '@angular/core';
import { MovieTrendingService} from '../services/movie-trending/movie-trending.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private movieTrendingService: MovieTrendingService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.movieTrendingService.getTrendingMovies()
      .subscribe(receivedTrendingMovies => {
        console.log(receivedTrendingMovies);
      });
  }
}
