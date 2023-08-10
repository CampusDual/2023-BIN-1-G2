import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros-view',
  templateUrl: './registros-view.component.html',
  styleUrls: ['./registros-view.component.css']
})
export class RegistrosViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createFilter(values: Array<{ attr; value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach((fil) => {
      if (fil.value) {
        if (fil.attr === "STARTDATE_I") {
          filters.push(
            FilterExpressionUtils.buildExpressionMoreEqual("date_in", fil.value)
          );
        }
        if (fil.attr === "ENDDATE_I") {
          let d=new Date(fil.value);
          d.setHours(23);
          d.setMinutes(59);
          d.setSeconds(59);
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual("date_in", Number(d))
          );
        }
        if (fil.attr === "STARTDATE_O") {
          filters.push(
            FilterExpressionUtils.buildExpressionMoreEqual("date_out", fil.value)
          );
        }
        if (fil.attr === "ENDDATE_O") {
          let d=new Date(fil.value);
          d.setHours(23);
          d.setMinutes(59);
          d.setSeconds(59);
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual("date_out", Number(d))
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

}
