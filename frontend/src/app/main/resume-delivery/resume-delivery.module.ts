import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDeliveryViewComponent } from './resume-delivery-view/resume-delivery-view.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ResumeDeliveryRoutingModule } from './resume-delivery-routing.module';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { ResumeDeliveryBalanceComponent } from './resume-delivery-balance/resume-delivery-balance.component';
import { ResumeDeliveryTrafficComponent } from './resume-delivery-traffic/resume-delivery-traffic.component';
import { ResumeDeliveryAffluenceComponent } from './resume-delivery-affluence/resume-delivery-affluence.component';



@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    ResumeDeliveryRoutingModule,
    OChartModule
  ],
  declarations: [ResumeDeliveryViewComponent,ResumeDeliveryBalanceComponent,ResumeDeliveryTrafficComponent, ResumeDeliveryAffluenceComponent]


})
export class ResumeDeliveryModule { }
