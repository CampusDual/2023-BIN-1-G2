import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
  MultiBarChartConfiguration,
  OChartComponent,
} from "ontimize-web-ngx-charts";
import { Subscription } from "rxjs";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { FilterChartService } from "src/app/shared/filter-chart.service";


@Component({
  selector: "app-resume-delivery-balance",
  templateUrl: "./resume-delivery-balance.component.html",
  styleUrls: ["./resume-delivery-balance.component.css"],
})
export class ResumeDeliveryBalanceComponent implements OnInit, OnDestroy {
  public movementTypesChartParamsBalance: DiscreteBarChartConfiguration;
  public movementTypesChartParamsBalanceMulti: MultiBarChartConfiguration;
  public dataChartBalance: any = [];
  public dataCharBalanceMulti:any=[];
  private translateServiceSubscription: Subscription;

  @ViewChild("balanceChart", { static: true }) balanceChart: OTableComponent;
  @ViewChild("chart", { static: true })
  chart: OChartComponent;
  @ViewChild("chart2", {static:true})
  chart2:OChartComponent;

  constructor(
    protected d3LocaleService: D3LocaleService,
    protected filterChart:FilterChartService,
    translate: OTranslateService
  ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();

    this.translateServiceSubscription = translate.onLanguageChanged.subscribe(
      () => {
        this.balanceChart.refresh();
        this.movementTypesChartParamsBalance.noDataMessage =
          translate.get("NO_DATA_FOUND");
        this.chart.updateOptions(this.movementTypesChartParamsBalance);
        this.movementTypesChartParamsBalanceMulti.noDataMessage =
          translate.get("NO_DATA_FOUND");
        this.chart2.updateOptions(this.movementTypesChartParamsBalanceMulti);
      }
    );
    this._configureBarChart(d3Locale, translate);
    this._configureMultiBarChart(d3Locale, translate);
  }

  

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.translateServiceSubscription.unsubscribe();
  }

  private _configureBarChart(
    _locale: any,
    translate: OTranslateService
  ): void {
    this.movementTypesChartParamsBalance = new DiscreteBarChartConfiguration();
    this.movementTypesChartParamsBalance.noDataMessage =
      translate.get("NO_DATA_FOUND");
    this.movementTypesChartParamsBalance.legend.maxKeyLength = 23;
    this.movementTypesChartParamsBalance.showLegend = true;
    this.movementTypesChartParamsBalance.legend.rightAlign = false;
    this.movementTypesChartParamsBalance.color = ["#3f51b5"];
    this.movementTypesChartParamsBalance.x1Axis.fontSize = 0;
  }
  private _configureMultiBarChart(
    _locale: any,
    translate: OTranslateService
  ): void {
    this.movementTypesChartParamsBalanceMulti = new MultiBarChartConfiguration();
    this.movementTypesChartParamsBalanceMulti.noDataMessage =
      translate.get("NO_DATA_FOUND");
    this.movementTypesChartParamsBalanceMulti.legend.maxKeyLength = 23;
    this.movementTypesChartParamsBalanceMulti.showLegend = true;
    this.movementTypesChartParamsBalanceMulti.legend.rightAlign = false;
    this.movementTypesChartParamsBalanceMulti.color = ["#3f51b5"];
    this.movementTypesChartParamsBalanceMulti.x1Axis.fontSize = 0;
  }
  loadDataBalance(data: Array<any>) {
    console.log(data)
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsBalance
    );
    const adapter2= DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsBalanceMulti
    )

    this.dataChartBalance = adapter.adaptResult(data);
    this.dataCharBalanceMulti=adapter2.adaptResult(data);
  }
}
