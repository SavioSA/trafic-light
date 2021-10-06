import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraficLightRoutingModule } from './trafic-light-routing.module';
import { TraficLightComponent } from './trafic-light.component';


@NgModule({
  declarations: [TraficLightComponent],
  imports: [
    CommonModule,
    TraficLightRoutingModule,
  ]
})
export class TraficLightModule { }
