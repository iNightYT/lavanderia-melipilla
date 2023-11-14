import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDeRopaPage } from './historial-de-ropa.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDeRopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDeRopaPageRoutingModule {}
