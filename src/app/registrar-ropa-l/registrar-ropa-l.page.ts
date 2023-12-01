import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-ropa-l',
  templateUrl: './registrar-ropa-l.page.html',
  styleUrls: ['./registrar-ropa-l.page.scss'],
})
export class RegistrarRopaLPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Ropa registrada',
      message: 'La ropa sucia a sido registrada con exito!',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            // Aquí colocas la lógica para redireccionar a otra página
            this.router.navigate(['/home']); // Reemplaza 'otra-pagina' con la ruta de la página a la que deseas navegar
          }
        }
      ],
    });
  
    await alert.present();
  }
  
}
