import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addPassedValueFromChild(newPassedValue: string){
    console.log('This is Top-rated, the parent of movie component: ', newPassedValue);
  }
}
