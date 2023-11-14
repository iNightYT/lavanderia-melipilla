import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresoRopaLimpiaPage } from './egreso-ropa-limpia.page';

const routes: Routes = [
  {
    path: '',
    component: EgresoRopaLimpiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresoRopaLimpiaPageRoutingModule {}
