import { Component } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';


@Component({
  selector: 'app-config-discrepancy',
  templateUrl: './config-discrepancy.component.html',
  styleUrls: ['./config-discrepancy.component.css']
})
export class ConfigDiscrepancyComponent {

  constructor(protected configService: ConfigService) {
  }
}
