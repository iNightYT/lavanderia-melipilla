import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController, private toastController: ToastController, private router: Router) {
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioRegistro.value;
    if (f.usuario === 'admin' && f.contrasena === 'admin') {
      localStorage.setItem('autenticado_Admin', 'true');
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: 'Administrador inició sesión con éxito!!',
        duration: 1500,
        position: 'top',
      });

      await toast.present();
      return;
    }

    // Validar el formulario
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }
    var usuarioUsuario = localStorage.getItem('usuarioUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (usuarioUsuario == f.usuario && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado','true');
      this.router.navigate(["/home"]);
      const toast = await this.toastController.create({
        message: 'El usuario inicio sesion con exito!!',
        duration: 1500,
        position: "top",
      });
  
      await toast.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }
}