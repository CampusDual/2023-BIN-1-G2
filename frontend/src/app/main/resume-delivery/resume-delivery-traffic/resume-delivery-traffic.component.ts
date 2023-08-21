import { Component, OnInit,ViewChild } from "@angular/core";
import {
  LineChartConfiguration,
  DataAdapterUtils,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { TargetChartService } from "src/app/shared/target-chart.service";


@Component({
  selector: 'app-resume-delivery-traffic',
  templateUrl: './resume-delivery-traffic.component.html',
  styleUrls: ['./resume-delivery-traffic.component.css']
})
export class ResumeDeliveryTrafficComponent implements OnInit {
  public movementTypesChartParams: LineChartConfiguration;

  public dataChartTraffic: any = [];
  constructor(protected d3LocaleService: D3LocaleService, protected targetChart:TargetChartService ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
  }

  ngOnInit() {
    this.targetChart.addChart(this.trafficChart)
  }
  
  private _configureLineChart(locale: any): void {
    this.movementTypesChartParams = new LineChartConfiguration();
    this.movementTypesChartParams.noDataMessage = "NO_DATA_FOUND";
    this.movementTypesChartParams.legend.rightAlign = false
    this.movementTypesChartParams.legend.maxKeyLength = 23;
  }

  @ViewChild("trafficChart",{static:true}) trafficChart

  loadDataTraffic(data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParams
    );
    this.dataChartTraffic = adapter.adaptResult(data);
  }

}
