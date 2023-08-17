import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicatedDeliveryService {

  private _duplicatedDelivery =  [];

constructor() { }

get duplicatedDelivery(){ return this._duplicatedDelivery}
set duplicatedDelivery(duplicatedDeliveryArray){ this._duplicatedDelivery=duplicatedDeliveryArray}

}
