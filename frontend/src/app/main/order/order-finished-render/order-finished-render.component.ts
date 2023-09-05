import { Component, Injector, Input, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'app-order-finished-render',
  templateUrl: './order-finished-render.component.html',
  styleUrls: ['./order-finished-render.component.scss']
})
export class OrderFinishedRenderComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;
  @Input() discrepancy:number

  constructor(protected injector: Injector) {
    super(injector);
  }

  getCellData(_: any, _rowvalue: Object) {
    return _rowvalue['is_finished']==="finished" ? "✅" : "❌";
   
  }

}
