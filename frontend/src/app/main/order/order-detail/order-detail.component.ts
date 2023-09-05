import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {
  Expression,
  FilterExpressionUtils,
  OCurrencyInputComponent,
  OFormComponent,
  OTableComponent,
} from "ontimize-web-ngx";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"],
})
export class OrderDetailComponent implements OnInit {
  @ViewChild("formDetail", { static: true }) formDetail: OFormComponent;
  @ViewChild("priceVol", { static: true }) priceVol: OCurrencyInputComponent;
  @ViewChild("deliveryTable", { static: true }) deliveryTable: OTableComponent;

  constructor() {}

  ngOnInit() {}

  changeNew(data: any) {
    if (data.id_order === "new") this.formDetail.setFieldValue("id_order", -1);
    this.deliveryTable.refresh()
  }

  createFilter(values: Array<{ attr; value }>): Expression {
    const filter = values[0];
    if (
      filter === undefined ||
      filter.value === undefined ||
      filter.value === "new"
    )
      return FilterExpressionUtils.buildExpressionEquals("id_order", -1);

    return FilterExpressionUtils.buildExpressionEquals(
      "id_order",
      Number(filter.value)
    );
  }

  priceFunction(value: any[]) {
    if (this.formDetail === undefined) return 0;
    console.log(value)
    return value
      .filter((a) => a.calculated_volume !== undefined)
      .reduce((acc, newSumando) => acc + newSumando.calculated_volume,0);
  }
}
