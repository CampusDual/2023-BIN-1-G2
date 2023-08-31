import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { OTableComponent } from "ontimize-web-ngx";
import { CONFIG } from "src/app/app.config";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"],
})
export class OrderDetailComponent implements OnInit {
  @ViewChild("deliveryTable", { static: true }) deliveryTable: OTableComponent;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  addDelivery() {
    const delivery = 317383;

    const currentDeliveries = this.deliveryTable.getDataArray();

    const columns = [
      "id_order",
      "order_name",
      "price_per_vol",
      "date_in",
      "date_out",
      "calculated_volume",
      "delivery_note",
    ];

    const session = JSON.parse(
      localStorage.getItem("com.ontimize.web.ngx.jee.seed")
    );

    const idHeader: string = session.session.id;

    this.http
      .post(
        `${CONFIG.apiEndpoint}/registers/orderAllDeliveries/search`,
        {
          filter: {
            delivery_note: delivery,
          },
          columns
        },
        {
          headers: {
            Authorization: "Bearer " + idHeader,
          },
        }
      )
      .subscribe((res: any) => {

        console.log(res)

        const deliveryObject = res.data;

        currentDeliveries.push(deliveryObject)

      })

      this.deliveryTable.setDataArray(currentDeliveries)
    
  }

  removeDelivery() {}

  cargaDatosTabla(data: any) {}
}
