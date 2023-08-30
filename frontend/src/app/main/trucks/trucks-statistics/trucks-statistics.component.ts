import { Component, OnInit, ViewChild } from "@angular/core";
import { DataAdapterUtils, GaugeDashboardChartConfiguration, OChartComponent } from "ontimize-web-ngx-charts";

@Component({
  selector: "app-trucks-statistics",
  templateUrl: "./trucks-statistics.component.html",
  styleUrls: ["./trucks-statistics.component.css"],
})
export class TrucksStatisticsComponent implements OnInit {
 
  
  private countTravels: number = 0;
  private volume_in: number = 0.00;
  private volume_out: number = 0.00;
  private time: string = "00:00:00";

  private gaugeDashboardConf: GaugeDashboardChartConfiguration

  @ViewChild('percentageChart', {static: true}) percentageChart: OChartComponent
  
  constructor() {
    this.gaugeDashboardConf = new GaugeDashboardChartConfiguration()
    this.gaugeDashboardConf.color = ['#3f51b5', '#eceff1']
  }

  ngOnInit() {
  }

  loadPercentage(data:any) {

    const percentage = data[0].percentage

    this.gaugeDashboardConf.title = Math.round(percentage * 100) / 100 + " %"
    this.percentageChart.reloadData()

  }
  
  loadCountTravels(data: any[]) {

    this.countTravels = data[0].travels

  }

  loadVolumes(data:any[]) {
    
    const vol_obj = data[0]

    this.volume_in = Math.round(vol_obj.volume_in * 100)/100
    this.volume_out = 0.00

    if (vol_obj.volume_out) this.volume_out = Math.round(vol_obj.volume_out * 100)/100 

  }

  loadTime(data:any[]) {

    if (data.length <= 0) return;


    console.log(data[0])

    const time = data[0].time

    const hours = time.hours
    const minutes = time.minutes
    const seconds = time.seconds

    const date = new Date()
    date.setHours(hours);
    date.setMinutes(minutes)
    date.setSeconds(seconds)

    this.time = date.toLocaleTimeString()
  
  }

}
