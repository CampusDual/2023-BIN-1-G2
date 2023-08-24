import { Component, OnInit } from '@angular/core';
import { DuplicatedDeliveryService } from 'src/app/shared/duplicatedDelivery.service';

@Component({
  selector: 'app-registros-detail',
  templateUrl: './registros-detail.component.html',
  styleUrls: ['./registros-detail.component.css']
})
export class RegistrosDetailComponent implements OnInit {

  constructor(private duplicatedService: DuplicatedDeliveryService) { }

  private delivery_note: number;

  public isDuplicated: string = "no";

  ngOnInit() {
  }

  onDataLoaded(data: any) {
    this.delivery_note = data.delivery_note;
  }

  isNotDuplicated(): "yes" | "no" {
    if (this.duplicatedService.duplicatedDelivery.includes(this.delivery_note)) {
      return "no"
    }
    return "yes"
  }

  validateDelivery(data: any) {
    if(typeof(data)==='number'){
      if (this.duplicatedService.duplicatedDelivery.includes(Number(data))) {
        this.isDuplicated = "yes";
      }
      else {
        this.isDuplicated = "no";
      }
    }
    else{
      if (this.duplicatedService.everyDelivery.includes(Number(data))) {
        this.isDuplicated = "yes";
      }
      else {
        this.isDuplicated = "no";
      }
    }

    
  }
}
