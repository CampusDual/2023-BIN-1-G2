import { Component, OnInit,ViewChild } from "@angular/core";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";


@Component({
  selector: "app-resume-delivery-view",
  templateUrl: "./resume-delivery-view.component.html",
  styleUrls: ["./resume-delivery-view.component.css"],
})
export class ResumeDeliveryViewComponent implements OnInit {
  
  @ViewChild("buttonQuery2",{static:true}) buttonQuery2
  @ViewChild("buttonClear2",{static:true}) buttonClear2
  @ViewChild("buttonQuery3",{static:true}) buttonQuery3
  @ViewChild("buttonClear3",{static:true}) buttonClear3

  constructor() {

  }
  

  ngOnInit() {}



  createFilter(values: Array<{ attr; value }>): Expression {
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
  

  
}
