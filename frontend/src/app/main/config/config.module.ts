import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ConfigViewComponent } from './config-view/config-view.component';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigDiscrepancyComponent } from './config-discrepancy/config-discrepancy.component';



@NgModule({
  imports: [
    SharedModule,
    ConfigRoutingModule,
    OntimizeWebModule
  ],
  declarations: [ConfigViewComponent, ConfigDiscrepancyComponent]
})
export class ConfigModule { }
