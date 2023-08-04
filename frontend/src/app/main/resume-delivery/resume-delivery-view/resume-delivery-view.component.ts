import { Component, OnInit } from '@angular/core';
import { ChartSeries, LineChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-resume-delivery-view',
  templateUrl: './resume-delivery-view.component.html',
  styleUrls: ['./resume-delivery-view.component.css']
})
export class ResumeDeliveryViewComponent implements OnInit {

  public movementTypesChartParams: LineChartConfiguration;

  constructor() { }

  ngOnInit() {
  }

}
