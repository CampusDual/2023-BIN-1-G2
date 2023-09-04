import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "ontimize-web-ngx";
import { OrderViewComponent } from "./order-view/order-view.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderDeliveryDetailComponent } from "./order-delivery-detail/order-delivery-detail.component";

export const routes: Routes = [
  {
    path: "",
    component: OrderViewComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ":id_order",
    component: OrderDetailComponent,
  },
  {
    path: ":id_order/new",
    component: OrderDeliveryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
