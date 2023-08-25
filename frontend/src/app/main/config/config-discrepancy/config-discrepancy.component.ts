import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-config-discrepancy',
  templateUrl: './config-discrepancy.component.html',
  styleUrls: ['./config-discrepancy.component.css']
})
export class ConfigDiscrepancyComponent implements OnInit {

  constructor(protected configService: ConfigService) {
  }

  ngOnInit() {
    
  }

  updateDiscrepancy(value: number) {
    this.configService.discrepancyValue = value;
    console.log(value);
  }
}
