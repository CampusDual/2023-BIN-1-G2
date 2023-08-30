import { Component, Injector, Input, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-truck-articulated-render',
  templateUrl: './truck-articulated-render.component.html'
})

export class TruckArticulatedRenderComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;
  @Input() discrepancy:number

  constructor(protected injector: Injector) {
    super(injector);
  }

  getCellData(cellvalue: any, _rowvalue: Object) {
    return _rowvalue['tipo_camion']==="articulado" ? "✅" : "❌";
   
  }

}