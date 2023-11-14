import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDeRopaPageRoutingModule } from './historial-de-ropa-routing.module';

import { HistorialDeRopaPage } from './historial-de-ropa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDeRopaPageRoutingModule
  ],
  declarations: [HistorialDeRopaPage]
})
export class HistorialDeRopaPageModule {}
