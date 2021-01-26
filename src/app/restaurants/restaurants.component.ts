import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';

import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  responseEmpty: boolean = true;
  restaurants: Restaurant[];

  constructor(private readonly restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(
      restaurant => {
        this.restaurants = restaurant;
      },
      err => {
        console.log('Could not retrieve data from server');
        this.responseEmpty = false;
      }
    );
  }

}
