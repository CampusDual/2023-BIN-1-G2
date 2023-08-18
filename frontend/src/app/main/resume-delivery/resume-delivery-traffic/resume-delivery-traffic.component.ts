import { Component, OnInit,ViewChild } from "@angular/core";
import {
  LineChartConfiguration,
  DataAdapterUtils,
} from "ontimize-web-ngx-charts";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
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
    this.movementTypesChartParams.legendPosition = "bottom";
    this.movementTypesChartParams.legend.maxKeyLength = 23;
  }

  @ViewChild("trafficChart",{static:true}) trafficChart

  createFilterTraffic(values: Array<{ attr; value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach((fil) => {
      if (fil.value) {
        if (fil.attr === "STARTDATE_I") {
          filters.push(
            FilterExpressionUtils.buildExpressionMoreEqual(
              "date_bigint",
              fil.value
            )
          );
        }
        if (fil.attr === "ENDDATE_I") {
          let d = new Date(fil.value);
          d.setHours(23);
          d.setMinutes(59);
          d.setSeconds(59);
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual(
              "date_bigint",
              Number(d)
            )
          );
        }
      }
    });

    if (filters.length > 0) {
      return filters.reduce((exp1, exp2) =>
        FilterExpressionUtils.buildComplexExpression(
          exp1,
          exp2,
          FilterExpressionUtils.OP_AND
        )
      );
    } else {
      return null;
    }
  }
  loadDataTraffic(data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParams
    );
    this.dataChartTraffic = adapter.adaptResult(data);
  }

}
