import { NgModule } from "@angular/core";

import { SharedModule } from './../shared/shared.module';

import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
    { path: '', component: OrderComponent }
]

@NgModule({
    declarations: [
        DeliveryCostsComponent,
        OrderComponent,
        OrderItemsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [

    ]
})
export class OrderModule {

}