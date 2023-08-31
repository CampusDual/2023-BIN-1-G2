import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderViewComponent } from './order-view/order-view.component';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    OrderRoutingModule,
    OChartModule
  ],
  declarations: [OrderViewComponent]
})
export class OrderModule { }
