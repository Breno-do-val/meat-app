import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output()
  rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

  temporaryRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.temporaryRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.temporaryRate === undefined) {
      this.temporaryRate = this.rate;
    }
    this.rate = r
  }

  clearTemporaryRate() {

    if (this.temporaryRate !== undefined) {
      this.rate = this.temporaryRate;
      this.temporaryRate = undefined;
    }
  }

}
