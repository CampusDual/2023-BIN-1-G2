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
  public arrayHours:Array<string>=["06","07","08","09","10","11","12","13","14","15","16", "17", "18", "19", "20", "21","22","23"]
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
      let newData:Array<any>=[]
      this.arrayHours.forEach(h=>{
        let hourObject={hour: h, 
        lunes:0,
        martes:0,
        miercoles:0,
        jueves:0,
        viernes:0,
        sabado:0}

        let dataHasHour=data.filter(d=> d.day_hour===h)

        dataHasHour.forEach(d=> {switch (d.day_date){
          case 1: hourObject.lunes=d.afluencia; break;
          case 2: hourObject.martes=d.afluencia;break;
          case 3: hourObject.miercoles=d.afluencia;break;
          case 4: hourObject.jueves=d.afluencia;break;
          case 5: hourObject.viernes=d.afluencia;break;
          case 6: hourObject.sabado=d.afluencia;break;
        }})
        
        newData.push(hourObject)
      })
      
        const adapter = DataAdapterUtils.createDataAdapter(
        this.movementTypesChartParamsAffluence
      );
      this.dataChartAffluence = adapter.adaptResult(newData);
    }

    @ViewChild("affluenceChart",{static:true}) affluenceChart;


}
