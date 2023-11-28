import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresoRopaPageRoutingModule } from './egreso-ropa-routing.module';

import { EgresoRopaPage } from './egreso-ropa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgresoRopaPageRoutingModule
  ],
  declarations: [EgresoRopaPage]
})
export class EgresoRopaPageModule {}
