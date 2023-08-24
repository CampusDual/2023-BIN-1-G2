import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
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
  public dataChartBalance: any = [];
  private translateServiceSubscription: Subscription;

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
      }
    );
    this._configureLineChart(d3Locale, translate);
  }

  @ViewChild("balanceChart", { static: true }) balanceChart: OTableComponent;
  @ViewChild("chart", { static: true })
  chart: OChartComponent;

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.translateServiceSubscription.unsubscribe();
  }

  private _configureLineChart(
    _locale: any,
    translate: OTranslateService
  ): void {
    this.movementTypesChartParamsBalance = new DiscreteBarChartConfiguration();
    this.movementTypesChartParamsBalance.noDataMessage =
      translate.get("NO_DATA_FOUND");
    this.movementTypesChartParamsBalance.legend.maxKeyLength = 23;
    this.movementTypesChartParamsBalance.showLegend = true;
    this.movementTypesChartParamsBalance.legend.rightAlign = false;
    this.movementTypesChartParamsBalance.height = 600;
    this.movementTypesChartParamsBalance.color = ["#3f51b5"];
    this.movementTypesChartParamsBalance.x1Axis.fontSize = 0;
  }

  loadDataBalance(data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsBalance
    );

    this.dataChartBalance = adapter.adaptResult(data);
  }
}
