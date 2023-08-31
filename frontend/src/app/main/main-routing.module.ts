import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'registros', loadChildren: ()=> import('./registros/registros.module').then(m => m.RegistrosModule)},
      { path: 'resume-delivery', loadChildren: () => import('./resume-delivery/resume-delivery.module').then(m => m.ResumeDeliveryModule) },
      { path: 'trucks', loadChildren: () => import('./trucks/trucks.module').then(m => m.TrucksModule) },
      { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
      { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
