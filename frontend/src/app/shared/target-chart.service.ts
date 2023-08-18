import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetChartService {

constructor() { }

private _chartObjects=[]

get chartObjects (){return this._chartObjects}

addChart (chart: any){
  console.log(chart)
  this._chartObjects.push(chart)
}
}
