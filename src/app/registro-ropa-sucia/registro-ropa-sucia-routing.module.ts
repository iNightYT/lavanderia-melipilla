import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroRopaSuciaPage } from './registro-ropa-sucia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroRopaSuciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRopaSuciaPageRoutingModule {}
