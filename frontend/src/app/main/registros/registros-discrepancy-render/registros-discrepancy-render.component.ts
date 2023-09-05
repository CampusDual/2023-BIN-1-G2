import { Component, Injector, Input, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'app-registros-discrepancy-render',
  templateUrl: './registros-discrepancy-render.component.html'
})

export class RegistrosDiscrepancyRenderComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;
  @Input() discrepancy:number

  constructor(protected injector: Injector) {
    super(injector);
  }

  getCellData(cellvalue: number | undefined, _rowvalue: Object) {
    
    if (cellvalue === undefined) return ""

    const cellvaluePorcentage = cellvalue * 100

    const isHigherThanDiscrepancy = cellvaluePorcentage > this.discrepancy;

    return (isHigherThanDiscrepancy ? "🟣" : "") + " " + Math.round(cellvaluePorcentage * 100) / 100 + " %"
   
  }

}