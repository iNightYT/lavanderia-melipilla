import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRopaSuciaPageRoutingModule } from './registro-ropa-sucia-routing.module';

import { RegistroRopaSuciaPage } from './registro-ropa-sucia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRopaSuciaPageRoutingModule
  ],
  declarations: [RegistroRopaSuciaPage]
})
export class RegistroRopaSuciaPageModule {}
