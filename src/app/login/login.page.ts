import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SqliteService } from '../servicios/sqlite.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController, private toastController: ToastController, private router: Router, private sqliteService: SqliteService) {
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
      // Lógica de autenticación del administrador
      // Suponiendo que no hay un usuario de administrador en la base de datos
      localStorage.setItem('autenticado_Admin', 'true');
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: '¡El administrador inició sesión con éxito!',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      return;
    }

    // Lógica de autenticación del usuario regular
    const usuario = f.usuario;
    const contrasena = f.contrasena;

    // Llama a tu servicio SQLite para verificar las credenciales del usuario
    const autenticado = await this.sqliteService.autenticarUsuario(usuario, contrasena);

    if (autenticado) {
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: '¡El usuario inició sesión con éxito!',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
    } else {
      const alerta = await this.alertController.create({
        header: 'Mensaje',
        message: 'Credenciales incorrectas',
        buttons: ['OK']
      });
      await alerta.present();
    }
  }
}