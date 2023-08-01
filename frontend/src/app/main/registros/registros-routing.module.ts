import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { RegistrosViewComponent } from './registros-view/registros-view.component';
import { RegistrosDetailComponent } from './registros-detail/registros-detail.component';


export const routes: Routes = [
  {
    path: '',
    component: RegistrosViewComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ":id",
    component: RegistrosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule {

}
