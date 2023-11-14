import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home/', icon: 'home' },
    { title: 'Registro de ropa sucia', url: '/registro-ropa-sucia/', icon: 'paper-plane' },
    { title: 'Egreso de ropa limpia', url: '/egreso-ropa-limpia/', icon: 'heart' },
    { title: 'Historial de transacciones', url: '/historial-transacciones/', icon: 'archive' },
    { title: 'Generar reportes', url: '/folder/trash', icon: 'trash' },
  ];
  public labels = [];
  constructor() {}
}
