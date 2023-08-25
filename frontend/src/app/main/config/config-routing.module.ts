import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigViewComponent } from './config-view/config-view.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
