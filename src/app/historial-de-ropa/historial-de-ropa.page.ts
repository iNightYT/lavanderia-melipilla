import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-historial-de-ropa',
  templateUrl: './historial-de-ropa.page.html',
  styleUrls: ['./historial-de-ropa.page.scss'],
})
export class HistorialDeRopaPage implements OnInit {
  historial: any[] = []; // Asegúrate de que este array esté lleno con datos

  constructor(private sqliteService: SqliteService) {}

  async ngOnInit() {
    await this.cargarHistorialDeRopa();
    await this.sqliteService.inicializarBaseDeDatos();
    await this.registrarHistorial();


  }
  async cargarHistorialDeRopa() {
    try {
      const historial = await this.sqliteService.obtenerHistorialDeRopa();

      if (historial.length > 0) {
        // Aquí puedes hacer algo con el historial
        console.log(historial);
      } else {
        // No hay historial registrado, maneja este caso según tu lógica
        console.log('No hay historial registrado');
      }
    } catch (error) {
      console.error('Error al cargar el historial de ropa', error);
    }
  }
  async registrarHistorial() {
    try {
      // Suponiendo que ya tienes el usuario actual y la hora actual en la base de datos
      const usuarioActual = await this.sqliteService.obtenerUsuarioActual();
      const horaActual = await this.sqliteService.obtenerHoraActual();
      
      const conteoRopa = await this.sqliteService.obtenerConteoRopaLimpia();
      const conteoRopaEgresada = await this.sqliteService.obtenerConteoRopaEgresada();

      await this.sqliteService.registrarRegistro(usuarioActual.medico, conteoRopa, horaActual);
      await this.sqliteService.registrarEgreso(usuarioActual.medico, conteoRopaEgresada, horaActual);

      // Aquí puedes realizar otras acciones después de registrar el historial
    } catch (error) {
      console.error('Error al registrar el historial:', error);
      // Aquí puedes manejar el error según tus necesidades
    }
  }
}