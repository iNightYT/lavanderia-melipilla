import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuarioNombre = localStorage.getItem('usuarioNombre');

  public appPages = [
    { title: 'Inicio', url: '/home/', icon: 'home' },
    { title: 'Registro de ropa Sucia', url: '/registro-ropa-limpia/', icon: 'paper-plane' },
    { title: 'Egreso de ropa', url: '/egreso-ropa/', icon: 'heart' },
    { title: 'Historial de ropa', url: '/historial-de-ropa/', icon: 'archive' },
    { title: 'Generar reportes', url: '/generar-reporte/', icon: 'trash' },
  ];
  public labels = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesion',
      message: 'Usted esta apunto de cerrar sesion, estas seguro?',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cancelada');
          },
        },
        {
          text: 'Si',
          cssClass: 'alert-button-confirm',
          handler: async () => {
            console.log('Redireccionando...');
            localStorage.removeItem('autenticado');
            localStorage.removeItem('autenticado_Admin');
            localStorage.removeItem('usuarioNombre');
            window.history.back();
            const toast = await this.toastController.create({
              message: 'El usuario cerro sesion con exito!!!',
              duration: 1500,
              position: "top",});
              await toast.present();
          },
        },
      ],
    });

    await alert.present();
  }
  isAuthenticated(): boolean {
    // Obtén el valor almacenado en localStorage
    const autenticado = localStorage.getItem('autenticado');

    // Devuelve true si está autenticado, de lo contrario, false
    return autenticado === 'true';
  }
}
