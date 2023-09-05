import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ConfigViewComponent } from './config-view/config-view.component';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigDiscrepancyComponent } from './config-discrepancy/config-discrepancy.component';
import { ConfigDiscrepancyRendererComponent } from './config-discrepancy-renderer/config-discrepancy-renderer.component';



@NgModule({
  imports: [
    SharedModule,
    ConfigRoutingModule,
    OntimizeWebModule
  ],
  declarations: [ConfigViewComponent, ConfigDiscrepancyComponent, ConfigDiscrepancyRendererComponent]
})
export class ConfigModule { }
