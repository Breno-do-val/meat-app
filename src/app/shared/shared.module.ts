import { HttpRequestInterceptor } from './utils/interceptors/http-request-interceptor';
import { NotificationService } from './messages/notification.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedIn.guard';

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        InputComponent,
        SnackbarComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                LoginService,
                ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoggedInGuard,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpRequestInterceptor,
                    multi: true
                }
            ]
        };
    }
}
