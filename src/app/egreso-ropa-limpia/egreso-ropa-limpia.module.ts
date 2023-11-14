import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresoRopaLimpiaPageRoutingModule } from './egreso-ropa-limpia-routing.module';

import { EgresoRopaLimpiaPage } from './egreso-ropa-limpia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgresoRopaLimpiaPageRoutingModule
  ],
  declarations: [EgresoRopaLimpiaPage]
})
export class EgresoRopaLimpiaPageModule {}
