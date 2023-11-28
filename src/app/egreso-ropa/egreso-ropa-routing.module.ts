import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresoRopaPage } from './egreso-ropa.page';

const routes: Routes = [
  {
    path: '',
    component: EgresoRopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresoRopaPageRoutingModule {}
