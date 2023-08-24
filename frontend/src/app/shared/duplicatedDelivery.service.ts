import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicatedDeliveryService {

  private _duplicatedDelivery = [];
  private _everyDelivery = [];

  constructor() { }

  get duplicatedDelivery() { return this._duplicatedDelivery };
  set duplicatedDelivery(duplicatedDeliveryArray) { this._duplicatedDelivery = duplicatedDeliveryArray };

  get everyDelivery() { return this._everyDelivery };
  set everyDelivery(everyDeliveryArray) { this._everyDelivery = everyDeliveryArray };

}
