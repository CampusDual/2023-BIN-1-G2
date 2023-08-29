import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trucks-statistics",
  templateUrl: "./trucks-statistics.component.html",
  styleUrls: ["./trucks-statistics.component.css"],
})
export class TrucksStatisticsComponent implements OnInit {
  constructor() {}

  private countTravels: number;
  private volume_in: number;
  private volume_out: number;

  loadCountTravels(data: any[]) {

    this.countTravels = data[0].travels

  }

  loadVolumes(data:any[]) {
    
    const vol_obj = data[0]

    this.volume_in = Math.round(vol_obj.volume_in * 100)/100
    this.volume_out = 0.00

    if (vol_obj.volume_out) this.volume_out = Math.round(vol_obj.volume_out * 100)/100 

  }

  ngOnInit() {}
}
