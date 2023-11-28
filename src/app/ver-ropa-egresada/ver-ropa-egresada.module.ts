import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRopaEgresadaPageRoutingModule } from './ver-ropa-egresada-routing.module';

import { VerRopaEgresadaPage } from './ver-ropa-egresada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRopaEgresadaPageRoutingModule
  ],
  declarations: [VerRopaEgresadaPage]
})
export class VerRopaEgresadaPageModule {}
