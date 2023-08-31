import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @ViewChild('combo', { static: true }) combo: OComboComponent

  constructor() { }

  ngOnInit() {
  }

  cargaDatosTabla(data: any) {
    this.combo.setSelectedItems(data.map((d) => d.delivery_note))
  }
  
}
