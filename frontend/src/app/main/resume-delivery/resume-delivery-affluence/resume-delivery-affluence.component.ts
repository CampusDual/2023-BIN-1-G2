import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  DataAdapterUtils,
  LineChartConfiguration,
  OChartComponent,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { TargetChartService } from "src/app/shared/target-chart.service";
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";

@Component({
  selector: "app-resume-delivery-affluence",
  templateUrl: "./resume-delivery-affluence.component.html",
  styleUrls: ["./resume-delivery-affluence.component.css"],
})
export class ResumeDeliveryAffluenceComponent implements OnInit, OnDestroy {
  public movementTypesChartParamsAffluence: LineChartConfiguration;
  public dataChartAffluence: any = [];
  public arrayHours: Array<string> = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

  @ViewChild("affluenceChart", { static: true })
  affluenceChart: OTableComponent;

  @ViewChild("chart", { static: true })
  chart: OChartComponent;

  constructor(
    protected d3LocaleService: D3LocaleService,
    protected targetChart: TargetChartService,
    translate: OTranslateService
  ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();

    this.translateServiceSubscription = translate.onLanguageChanged.subscribe(
      () => {
        this.affluenceChart.refresh();
        this.movementTypesChartParamsAffluence.noDataMessage =
          translate.get("NO_DATA_FOUND");
        this.chart.updateOptions(this.movementTypesChartParamsAffluence);
      }
    );
    this._configureLineChart(d3Locale, translate);
  }

  private translateServiceSubscription: Subscription;

  ngOnInit() {
    this.targetChart.addChart(this.affluenceChart);
  }

  ngOnDestroy(): void {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
  }

  private _configureLineChart(
    _locale: any,
    translate: OTranslateService
  ): void {
    this.movementTypesChartParamsAffluence = new LineChartConfiguration();
    this.movementTypesChartParamsAffluence.legend.vers = "furious";
    this.movementTypesChartParamsAffluence.noDataMessage =
      translate.get("NO_DATA_FOUND");
    this.movementTypesChartParamsAffluence.legendPosition = "bottom";
    this.movementTypesChartParamsAffluence.legend.maxKeyLength = 23;
  }

  loadDataAffluence(data: any[]) {
    let newData: Array<any> = [];

    let isEmpty = data.every((d) => d.afluencia === 0);

    if (isEmpty) {
      const adapter = DataAdapterUtils.createDataAdapter(
        this.movementTypesChartParamsAffluence
      );
      this.dataChartAffluence = adapter.adaptResult(newData);
      return;
    }

    this.arrayHours.forEach((h) => {
      let hourObject = {
        hour: h,
        LUNES: 0,
        MARTES: 0,
        MIERCOLES: 0,
        JUEVES: 0,
        VIERNES: 0,
        SABADO: 0,
      };

      let dataHasHour = data.filter((d) => d.day_hour === h);

      dataHasHour.forEach((d) => {
        switch (d.day_date) {
          case 1:
            hourObject.LUNES = d.afluencia;
            break;
          case 2:
            hourObject.MARTES = d.afluencia;
            break;
          case 3:
            hourObject.MIERCOLES = d.afluencia;
            break;
          case 4:
            hourObject.JUEVES = d.afluencia;
            break;
          case 5:
            hourObject.VIERNES = d.afluencia;
            break;
          case 6:
            hourObject.SABADO = d.afluencia;
            break;
        }
      });
      newData.push(hourObject);
    });

    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsAffluence
    );
    this.dataChartAffluence = adapter.adaptResult(newData);
  }
}
