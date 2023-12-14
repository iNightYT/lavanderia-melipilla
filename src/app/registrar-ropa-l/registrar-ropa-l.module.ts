import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarRopaLPageRoutingModule } from './registrar-ropa-l-routing.module';

import { RegistrarRopaLPage } from './registrar-ropa-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarRopaLPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarRopaLPage]
})
export class RegistrarRopaLPageModule {}
