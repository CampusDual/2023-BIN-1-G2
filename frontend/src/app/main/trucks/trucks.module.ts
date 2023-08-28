import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrucksViewComponent } from './trucks-view/trucks-view.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';

@NgModule({
  imports: [
    TrucksRoutingModule,
    SharedModule,
    OntimizeWebModule
  ],
  declarations: [TrucksViewComponent, TrucksDetailComponent]
})
export class TrucksModule { }
