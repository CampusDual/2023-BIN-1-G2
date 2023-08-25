import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-registros-discrepancy-render',
  templateUrl: './registros-discrepancy-render.component.html'
})

export class RegistrosDiscrepancyRenderComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector, private discrepancyService:ConfigService) {
    super(injector);
  }

  getCellData(cellvalue: number | undefined, _rowvalue: Object) {
    
    if (cellvalue === undefined) return ""

    const cellvaluePorcentage = cellvalue * 100

    const isHigherThanDiscrepancy = cellvaluePorcentage > this.discrepancyService.discrepancyValue;

    return (isHigherThanDiscrepancy ? "🟣" : "") + " " + Math.round(cellvaluePorcentage * 100) / 100 + " %"
   
  }

}