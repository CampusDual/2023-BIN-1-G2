import { Component, OnInit, ViewChild } from "@angular/core";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
} from "ontimize-web-ngx-charts";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
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

  private _configureLineChart(locale: any): void {
    this.movementTypesChartParamsBalance = new DiscreteBarChartConfiguration();
    this.movementTypesChartParamsBalance.noDataMessage = "NO_DATA_FOUND";
    this.movementTypesChartParamsBalance.legend.maxKeyLength = 23;
    this.movementTypesChartParamsBalance.rightAlingYAxis = true;
    this.movementTypesChartParamsBalance.rotateLabels = 270;
    this.movementTypesChartParamsBalance.height = 600;
    this.movementTypesChartParamsBalance.color = ["#1464a5"]
  }

  @ViewChild("balanceChart",{static:true}) balanceChart



  createFilterBalance(values: Array<{ attr; value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach((fil) => {
      if (fil.value) {
        if (fil.attr === "STARTDATE_I") {
          filters.push(
            FilterExpressionUtils.buildExpressionMoreEqual(
              "day_bigint",
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
              "day_bigint",
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

  loadDataBalance  (data: Array<any>) {
    const adapter = DataAdapterUtils.createDataAdapter(
      this.movementTypesChartParamsBalance
    );
          
    this.dataChartBalance = adapter.adaptResult(data);
  }
}
