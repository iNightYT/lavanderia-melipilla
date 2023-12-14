import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cantidadReportes: number = 0;

  constructor(
    private toastController: ToastController,
    private sqliteService: SqliteService
  ) {}

  ngOnInit() {
    // Obtener la cantidad de reportes al inicializar la página
    this.obtenerCantidadReportes();
  }

  ionViewDidEnter() {
    // Este método se ejecuta cuando la vista ha sido insertada en el DOM.
    // Puedes mostrar tu toaster alert aquí.

    this.presentToast(); // Llama a la función que muestra el toaster alert.
  }

  async obtenerCantidadReportes() {
    this.cantidadReportes = await this.sqliteService.obtenerCantidadReportes();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Se generaron ${this.cantidadReportes} Reportes`,
      duration: 2000, // Duración en milisegundos
      position: 'bottom', // Posición del toaster alert
    });

    toast.present();
  }
}