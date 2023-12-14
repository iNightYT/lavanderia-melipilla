import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-egreso-ropa',
  templateUrl: './egreso-ropa.page.html',
  styleUrls: ['./egreso-ropa.page.scss'],
})
export class EgresoRopaPage implements OnInit {
  marcasRegistradas: any[] = [];
  marcaSeleccionada: any = null;
  marca: string = '';
  cantidad: string = '';
  limpieza: string = '';
  tipo: string = '';

  constructor(private alertController: AlertController, private router: Router, private sqliteService: SqliteService) { }

  async ngOnInit() {
    this.cargarMarcasRegistradas();
  }

  async cargarMarcasRegistradas() {
    // Obtener las marcas registradas desde la base de datos
    this.marcasRegistradas = await this.sqliteService.obtenerMarcasRegistradas();
  }

  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Egreso de ropa',
      message: 'Ropa egresada',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

  seleccionarRopa() {
    if (this.marcaSeleccionada) {
      this.marca = this.marcaSeleccionada.marca;
      this.cantidad = this.marcaSeleccionada.cantidad;
      this.limpieza = this.marcaSeleccionada.limpieza;
      this.tipo = this.marcaSeleccionada.tipo;
    }
  }
  async egresarRopa() {
    if (this.marcaSeleccionada) {
      const datosRopaEgresada = {
        marca: this.marcaSeleccionada.marca,
        cantidad: this.cantidad,
        limpieza: this.limpieza,
        tipo: this.tipo,
      };

      // Almacena la ropa egresada en la tabla 'ropa_egresada'
      await this.sqliteService.registrarRopaEgresada(datosRopaEgresada);

      // Muestra la alerta de egreso
      this.Alerta();
    } else {
      // Muestra una alerta indicando que se debe seleccionar una marca
      this.mostrarAlertaSeleccionarMarca();
    }
  }

  async mostrarAlertaSeleccionarMarca() {
    const alert = await this.alertController.create({
      header: 'Seleccionar Marca',
      message: 'Debes seleccionar una marca para poder egresar la ropa.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}