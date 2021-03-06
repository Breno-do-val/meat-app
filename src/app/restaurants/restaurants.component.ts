import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

import { Observable, from } from 'rxjs';
import { catchError, debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Restaurant } from './restaurant/restaurant.model';

import { RestaurantsService } from './restaurants.service';

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('toggleSearch', [
            state(
                'hidden',
                style({
                    opacity: 0,
                    'max-height': '0px'
                })
            ),
            state(
                'visible',
                style({
                    opacity: 1,
                    'max-height': '70px',
                    'margin-top': '20px'
                })
            ),
            transition('* => *', animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {
    searchBarState = 'hidden';
    responseEmpty: boolean = true;
    restaurants: Restaurant[];

    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(
        private readonly restaurantsService: RestaurantsService,
        private readonly fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });

        this.searchControl.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((searchTerm) =>
                    this.restaurantsService
                    .restaurants(searchTerm)
                    .pipe(catchError(error => from([]))))
            )
            .subscribe((restaurant) => {
                this.restaurants = restaurant;
            });

        this.restaurantsService.restaurants().subscribe(
            (restaurant) => {
                this.restaurants = restaurant;
            }
        );
    }

    toggleSearch() {
        this.searchBarState =
            this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }
}
