import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ConfigViewComponent } from './config-view/config-view.component';
import { ConfigRoutingModule } from './config-routing.module';



@NgModule({
  imports: [
    SharedModule,
    ConfigRoutingModule,
    OntimizeWebModule
  ],
  declarations: [ConfigViewComponent]
})
export class ConfigModule { }
