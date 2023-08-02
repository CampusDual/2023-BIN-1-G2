import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { ResumeDeliveryViewComponent } from './resume-delivery-view/resume-delivery-view.component';


export const routes: Routes = [
  {
    path: '',
    component: ResumeDeliveryViewComponent,
    canActivate: [AuthGuardService],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeDeliveryRoutingModule {

}
