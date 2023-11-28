import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroRopaLimpiaPage } from './registro-ropa-limpia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroRopaLimpiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRopaLimpiaPageRoutingModule {}
