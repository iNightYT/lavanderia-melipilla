import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarReportePage } from './generar-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarReportePageRoutingModule {}
