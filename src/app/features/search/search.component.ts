import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SearchService } from '../../core/services/search/search.service';
import { MovieModel } from '../../core/interfaces/movie-model/movie-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  isSubmitted = false;
  public receivedSearchedMovies: MovieModel[] = [];

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.searchForm  =  this.formBuilder.group({
      searched: ['', [Validators.required]]
    });
  }
  get formControls() { return this.searchForm.controls; }

  submitSearch(query) {

    this.isSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    else {
      this.searchService.getSearchedMovies(query)
        .subscribe(responseData => {
          console.log('responseData: ', responseData);
          this.receivedSearchedMovies = responseData.results;
        });
    }
  }
}
