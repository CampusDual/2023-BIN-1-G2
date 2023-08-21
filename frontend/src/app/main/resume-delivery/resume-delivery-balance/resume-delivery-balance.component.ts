import { Component, OnInit, ViewChild } from "@angular/core";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { TargetChartService } from "src/app/shared/target-chart.service";

@Component({
  selector: 'app-resume-delivery-balance',
  templateUrl: './resume-delivery-balance.component.html',
  styleUrls: ['./resume-delivery-balance.component.css']
})
export class ResumeDeliveryBalanceComponent implements OnInit {
  public movementTypesChartParamsBalance: DiscreteBarChartConfiguration;
  public dataChartBalance: any = [];

  constructor(protected d3LocaleService: D3LocaleService, protected targetChart:TargetChartService) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
  }

  ngOnInit() {
    this.targetChart.addChart(this.balanceChart)
  }

  private _configureLineChart(_locale: any): void {
    this.movementTypesChartParamsBalance = new DiscreteBarChartConfiguration();
    this.movementTypesChartParamsBalance.noDataMessage = "NO_DATA_FOUND";
    this.movementTypesChartParamsBalance.legend.maxKeyLength = 23;
    this.movementTypesChartParamsBalance.showLegend = true
    this.movementTypesChartParamsBalance.legend.rightAlign = false
    this.movementTypesChartParamsBalance.height = 600;
    this.movementTypesChartParamsBalance.color = ['#3f51b5']
    this.movementTypesChartParamsBalance.x1Axis.fontSize = 0
  }

  @ViewChild("balanceChart",{static:true}) balanceChart

  loadDataBalance  (data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsBalance
    );
          
    this.dataChartBalance = adapter.adaptResult(data);
  }
}
