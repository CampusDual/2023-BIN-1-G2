import { Component, OnInit } from "@angular/core";
import { LineChartConfiguration } from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

@Component({
  selector: "app-resume-delivery-view",
  templateUrl: "./resume-delivery-view.component.html",
  styleUrls: ["./resume-delivery-view.component.css"],
})
export class ResumeDeliveryViewComponent implements OnInit {
  public movementTypesChartParams: LineChartConfiguration;

  constructor(protected d3LocaleService: D3LocaleService) {
      const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
      this._configureLineChart(d3Locale);
  }

  ngOnInit() {}

  private _configureLineChart(locale: any): void {
    this.movementTypesChartParams = new LineChartConfiguration();
    this.movementTypesChartParams.noDataMessage = "NO_DATA_FOUND"
    this.movementTypesChartParams.legendPosition = "bottom"
    this.movementTypesChartParams.legend.maxKeyLength = 23
  }
}
