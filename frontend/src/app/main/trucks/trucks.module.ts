import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrucksViewComponent } from './trucks-view/trucks-view.component';
import { TruckRoutingModule } from './truck-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    TruckRoutingModule,
    SharedModule,
    OntimizeWebModule
  ],
  declarations: [TrucksViewComponent]
})
export class TrucksModule { }
