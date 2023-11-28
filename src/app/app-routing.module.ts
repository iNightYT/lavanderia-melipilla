import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuntenticadoGuard } from './Guards/auntenticado.guard';

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
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'historial-de-ropa',
    loadChildren: () => import('./historial-de-ropa/historial-de-ropa.module').then( m => m.HistorialDeRopaPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'historial-transacciones',
    loadChildren: () => import('./historial-transacciones/historial-transacciones.module').then( m => m.HistorialTransaccionesPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'generar-reporte',
    loadChildren: () => import('./generar-reporte/generar-reporte.module').then( m => m.GenerarReportePageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'registro-ropa-limpia',
    loadChildren: () => import('./registro-ropa-limpia/registro-ropa-limpia.module').then( m => m.RegistroRopaLimpiaPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'egreso-ropa',
    loadChildren: () => import('./egreso-ropa/egreso-ropa.module').then( m => m.EgresoRopaPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'registrar-ropa-l',
    loadChildren: () => import('./registrar-ropa-l/registrar-ropa-l.module').then( m => m.RegistrarRopaLPageModule),
    canActivate: [AuntenticadoGuard]
  },
  {
    path: 'ver-ropa-egresada',
    loadChildren: () => import('./ver-ropa-egresada/ver-ropa-egresada.module').then( m => m.VerRopaEgresadaPageModule),
    canActivate: [AuntenticadoGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
