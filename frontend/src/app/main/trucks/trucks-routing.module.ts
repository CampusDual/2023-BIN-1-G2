import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { TrucksViewComponent } from './trucks-view/trucks-view.component';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';



const routes: Routes = [
  {
    path: '',
    component: TrucksViewComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: ':plate_name',
    component: TrucksDetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule { }
