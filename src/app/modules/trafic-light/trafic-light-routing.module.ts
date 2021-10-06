import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraficLightComponent } from './trafic-light.component';

const routes: Routes = [
  {
    path: '',
    component: TraficLightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraficLightRoutingModule { }
