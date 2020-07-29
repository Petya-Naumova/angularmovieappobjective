import {Component, Inject, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SearchService } from '../../core/services/search/search.service';
import { MovieModel } from '../../core/interfaces/movie-model/movie-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  searchForm: FormGroup;
  isSubmitted = false;

  receivedSearchedMovies: MovieModel[] = [];
  isMovieHasBeenSearched = false;

  constructor(private searchService: SearchService, private formBuilder: FormBuilder, public  dialog: MatDialog) {
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
          const dialogRef = this.dialog.open(this.callAPIDialog);
          // this.dialog.open(callAPIDialog, {
          //   height: '400px',
          //   width: '600px',
          //   data: { model : responseData },
          // });
        });
    }
  }
}

