import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-registrar-ropa-l',
  templateUrl: './registrar-ropa-l.page.html',
  styleUrls: ['./registrar-ropa-l.page.scss'],
})
export class RegistrarRopaLPage implements OnInit {
  

  formulario: FormGroup;

  constructor(private alertController: AlertController, private router: Router, public fb: FormBuilder, private sqliteService: SqliteService) {
    this.formulario = this.fb.group({
      marca: [''],
      cantidad: [''],
      limpieza: [''],
      tipo: [''],
    });
  }

  ngOnInit() {}

  async registrarRopa() {
    const datosFormulario = this.formulario.value;
    
    // Verifica que todos los campos estén llenos
    if (this.camposEstanCompletos(datosFormulario)) {
      // Utiliza el servicio para almacenar los datos en la base de datos
      await this.sqliteService.registrarRopa(datosFormulario);
      this.Alerta();
    } else {
      // Muestra una alerta indicando que todos los campos deben estar llenos
      this.mostrarAlertaCamposIncompletos();
    }
  }

  camposEstanCompletos(datosFormulario: any): boolean {
    // Verifica que todos los valores no sean nulos ni cadenas vacías
    return Object.values(datosFormulario).every(value => value !== null && value !== '');
  }
  
  async mostrarAlertaCamposIncompletos() {
    const alert = await this.alertController.create({
      header: 'Campos incompletos',
      message: 'Todos los campos deben estar llenos para registrar la ropa.',
      buttons: ['OK']
    });
  
    await alert.present();
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
