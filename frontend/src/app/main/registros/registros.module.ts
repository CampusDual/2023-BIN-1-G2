import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrosRoutingModule } from './registros-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { RegistrosViewComponent } from './registros-view/registros-view.component';


@NgModule({
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    OntimizeWebModule
  ],
  declarations: [RegistrosViewComponent]
})
export class RegistrosModule { }
