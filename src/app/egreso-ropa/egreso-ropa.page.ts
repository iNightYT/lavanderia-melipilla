import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-egreso-ropa',
  templateUrl: './egreso-ropa.page.html',
  styleUrls: ['./egreso-ropa.page.scss'],
})
export class EgresoRopaPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Egreso de ropa',
      message: 'Ropa egresada',
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
