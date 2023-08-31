import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderViewComponent } from './order-view/order-view.component';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OrderRoutingModule } from './order-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    OrderRoutingModule,
    OChartModule,
    HttpClientModule
  ],
  declarations: [OrderViewComponent,OrderDetailComponent]
})
export class OrderModule { }
