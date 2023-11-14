import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarReportePageRoutingModule } from './generar-reporte-routing.module';

import { GenerarReportePage } from './generar-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarReportePageRoutingModule
  ],
  declarations: [GenerarReportePage]
})
export class GenerarReportePageModule {}
