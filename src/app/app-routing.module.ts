import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro-ropa-sucia',
    loadChildren: () => import('./registro-ropa-sucia/registro-ropa-sucia.module').then( m => m.RegistroRopaSuciaPageModule)
  },
  {
    path: 'egreso-ropa-limpia',
    loadChildren: () => import('./egreso-ropa-limpia/egreso-ropa-limpia.module').then( m => m.EgresoRopaLimpiaPageModule)
  },
  {
    path: 'historial-de-ropa',
    loadChildren: () => import('./historial-de-ropa/historial-de-ropa.module').then( m => m.HistorialDeRopaPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'historial-transacciones',
    loadChildren: () => import('./historial-transacciones/historial-transacciones.module').then( m => m.HistorialTransaccionesPageModule)
  },
  {
    path: 'generar-reporte',
    loadChildren: () => import('./generar-reporte/generar-reporte.module').then( m => m.GenerarReportePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
