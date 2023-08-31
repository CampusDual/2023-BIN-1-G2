import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { OrderViewComponent } from './order-view/order-view.component';



export const routes: Routes = [
  {
    path: '',
    component:OrderViewComponent,
    canActivate: [AuthGuardService],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {

}
