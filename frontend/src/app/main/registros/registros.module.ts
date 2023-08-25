import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrosRoutingModule } from './registros-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { RegistrosViewComponent } from './registros-view/registros-view.component';
import { RegistrosDetailComponent } from './registros-detail/registros-detail.component';
import { RegistrosDiscrepancyRenderComponent } from './registros-discrepancy-render/registros-discrepancy-render.component';




@NgModule({
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    OntimizeWebModule
   
  ],
  exports:[],
  declarations: [RegistrosViewComponent,RegistrosDetailComponent, RegistrosDiscrepancyRenderComponent]
})
export class RegistrosModule { }
