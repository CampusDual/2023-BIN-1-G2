import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrucksViewComponent } from './trucks-view/trucks-view.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';
import { TrucksStatisticsComponent } from './trucks-statistics/trucks-statistics.component';
import { TrucksTravelsComponent } from './trucks-travels/trucks-travels.component';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  imports: [
    TrucksRoutingModule,
    SharedModule,
    OntimizeWebModule,
    OChartModule
  ],
  declarations: [TrucksViewComponent, TrucksDetailComponent,TrucksStatisticsComponent,TrucksTravelsComponent]
})
export class TrucksModule { }
