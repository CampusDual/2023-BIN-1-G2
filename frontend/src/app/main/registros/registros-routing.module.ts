import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { RegistrosViewComponent } from './registros-view/registros-view.component';


export const routes: Routes = [
  {
    path: '',
    component: RegistrosViewComponent,
    canActivate: [AuthGuardService],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule {

}
