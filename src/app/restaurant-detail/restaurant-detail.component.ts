import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  
  public restaurant: Restaurant
  
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => {
        this.restaurant = restaurant;
      });
  }

}
