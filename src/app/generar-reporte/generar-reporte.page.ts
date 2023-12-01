import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.page.html',
  styleUrls: ['./generar-reporte.page.scss'],
})
export class GenerarReportePage implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Reporte Generado',
      message: 'Reporte generado con éxito',
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
