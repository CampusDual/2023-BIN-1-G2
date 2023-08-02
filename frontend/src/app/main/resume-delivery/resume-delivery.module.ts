import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDeliveryViewComponent } from './resume-delivery-view/resume-delivery-view.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ResumeDeliveryRoutingModule } from './resume-delivery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    ResumeDeliveryRoutingModule
  ],
  declarations: [ResumeDeliveryViewComponent]
})
export class ResumeDeliveryModule { }
