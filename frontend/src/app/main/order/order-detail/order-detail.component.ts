import { Component, OnInit, ViewChild } from "@angular/core";
import {
  Expression,
  FilterExpressionUtils,
  OTableComponent,
} from "ontimize-web-ngx";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"],
})
export class OrderDetailComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  createFilter(values: Array<{ attr; value }>): Expression {

    const filter = values[0];
    if (filter === undefined || filter.value === undefined) return null;

    return FilterExpressionUtils.buildExpressionEquals(
      "id_order",
      Number(filter.value)
    );
  }
}
