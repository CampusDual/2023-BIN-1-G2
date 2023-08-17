import { Component, OnInit } from '@angular/core';
import { DuplicatedDeliveryService } from 'src/app/shared/duplicatedDelivery.service';

@Component({
  selector: 'app-registros-detail',
  templateUrl: './registros-detail.component.html',
  styleUrls: ['./registros-detail.component.css']
})
export class RegistrosDetailComponent implements OnInit {

  constructor( private duplicatedService:DuplicatedDeliveryService) { }
  private delivery_note:number;

  ngOnInit() {
  }

  onDataLoaded(data:any){
    this.delivery_note=data.delivery_note;
  }

   isDuplicated(): "yes"|"no" {
    console.log("hola")
      if(this.duplicatedService.duplicatedDelivery.includes(this.delivery_note)){
        return "no"
      }
      return "yes"
   }
}
