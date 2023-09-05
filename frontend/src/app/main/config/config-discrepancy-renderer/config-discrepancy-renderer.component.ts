import { Component, Injector, Input, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-config-discrepancy-renderer',
  templateUrl: './config-discrepancy-renderer.component.html',
  styleUrls: ['./config-discrepancy-renderer.component.scss']
})
export class ConfigDiscrepancyRendererComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;
  @Input() discrepancy:number

  constructor(protected injector: Injector, protected translate: OTranslateService) {
    super(injector);
  }

  getCellData(_: any, _rowvalue: Object) {
    const config_name: string = _rowvalue['config_name']
    return this.translate.get(config_name.toUpperCase())
  }

}
