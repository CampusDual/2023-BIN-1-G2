import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import {
  LineChartConfiguration,
  DataAdapterUtils,
  OChartComponent,
} from "ontimize-web-ngx-charts";
import { Subscription } from "rxjs";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { TargetChartService } from "src/app/shared/target-chart.service";

@Component({
  selector: "app-resume-delivery-traffic",
  templateUrl: "./resume-delivery-traffic.component.html",
  styleUrls: ["./resume-delivery-traffic.component.css"],
})
export class ResumeDeliveryTrafficComponent implements OnInit, OnDestroy {
  public movementTypesChartParams: LineChartConfiguration;
  private translateServiceSubscription: Subscription;

  @ViewChild("chart", { static: true })
  chart: OChartComponent;
  @ViewChild("trafficChart", { static: true }) trafficChart: OTableComponent;

  public dataChartTraffic: any = [];
  constructor(
    protected d3LocaleService: D3LocaleService,
    protected targetChart: TargetChartService,
    translate: OTranslateService
  ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.translateServiceSubscription = translate.onLanguageChanged.subscribe(
      () => {
        this.trafficChart.refresh();
        this.movementTypesChartParams.noDataMessage =
          translate.get("NO_DATA_FOUND");
        this.chart.updateOptions(this.movementTypesChartParams);
      }
    );

    this._configureLineChart(d3Locale, translate);
  }

  ngOnInit() {
    this.targetChart.addChart(this.trafficChart);
  }

  ngOnDestroy(): void {
    this.translateServiceSubscription.unsubscribe();
  }

  private _configureLineChart(locale: any, translate: OTranslateService): void {
    this.movementTypesChartParams = new LineChartConfiguration();
    this.movementTypesChartParams.noDataMessage =
      translate.get("NO_DATA_FOUND");
    this.movementTypesChartParams.legend.rightAlign = false;
    this.movementTypesChartParams.legend.maxKeyLength = 23;
    this.movementTypesChartParams.color = ["#3f51b5"];
  }

  loadDataTraffic(data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParams
    );
    this.dataChartTraffic = adapter.adaptResult(data);
  }
}
