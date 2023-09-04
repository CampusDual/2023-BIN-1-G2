import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {
  Expression,
  FilterExpressionUtils,
  OFormComponent,
  OTableComponent,
} from "ontimize-web-ngx";


@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"],
})
export class OrderDetailComponent implements OnInit, AfterViewInit {
  @ViewChild("formDetail",{static:true}) formDetail: OFormComponent
  
  constructor() {}

  ngOnInit() {
  
  }

  ngAfterViewInit(){
    console.log(this.formDetail.getFieldValue("id_order"))
    if(this.formDetail.getFieldValue("id_order")==="new"){
    console.log(this.formDetail.getFieldValue("id_order"))
    this.formDetail.setFieldValue("id_order",-1)
    }
  }

  changeNew(data:any){
    if (data.id_order==="new")
    this.formDetail.setFieldValue("id_order", -1)
  }

  createFilter(values: Array<{ attr; value }>): Expression {
    
    const filter = values[0];
    if (filter === undefined || filter.value === undefined|| filter.value==="new")
      return FilterExpressionUtils.buildExpressionEquals("id_order", -1);

    return FilterExpressionUtils.buildExpressionEquals(
      "id_order",
      Number(filter.value)
    );
  }
}
