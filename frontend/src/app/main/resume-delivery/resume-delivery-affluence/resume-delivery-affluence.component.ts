import { Component, OnInit, ViewChild } from '@angular/core';
import {  DataAdapterUtils,  LineChartConfiguration,} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
import { TargetChartService } from "src/app/shared/target-chart.service";

@Component({
  selector: 'app-resume-delivery-affluence',
  templateUrl: './resume-delivery-affluence.component.html',
  styleUrls: ['./resume-delivery-affluence.component.css']
})
export class ResumeDeliveryAffluenceComponent implements OnInit {

  public movementTypesChartParamsAffluence: LineChartConfiguration;
  public dataChartAffluence: any= [];

  constructor(protected d3LocaleService: D3LocaleService,protected targetChart:TargetChartService) { 
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
  }
    
  ngOnInit() {
  }
  
    private _configureLineChart(locale: any): void {
    
    this.movementTypesChartParamsAffluence = new LineChartConfiguration();
    this.movementTypesChartParamsAffluence.legend.vers="furious";
    this.movementTypesChartParamsAffluence.noDataMessage = "NO_DATA_FOUND";
    this.movementTypesChartParamsAffluence.legendPosition = "bottom";
    this.movementTypesChartParamsAffluence.legend.maxKeyLength = 23;
    }

    loadDataAffluence(data : any[]){
        const adapter = DataAdapterUtils.createDataAdapter(
        this.movementTypesChartParamsAffluence
      );
      this.dataChartAffluence = adapter.adaptResult(data);
    }

    @ViewChild("affluenceChart",{static:true}) affluenceChart;


}
