import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public passedValueFromTheModal;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<MovieComponent>) {}

  ngOnInit(): void {
    this.passedValueFromTheModal = 'Value coming from the material dialog';
  }
  close() {
    this.dialogRef.close(this.passedValueFromTheModal);
  }
}
