import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';


@Component({
  selector: 'app-config-discrepancy',
  templateUrl: './config-discrepancy.component.html',
  styleUrls: ['./config-discrepancy.component.css']
})
export class ConfigDiscrepancyComponent implements OnInit {

  constructor(protected configService: ConfigService) {
  }
  @ViewChild ("intInput",{static:true}) intInput


  ngOnInit() {
    // this.intInput.setValue(this.configService.discrepancyValue)
  }

  updateDiscrepancy(value: number|string) {
   
  }
}
