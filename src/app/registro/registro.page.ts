import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController, private SqliteService: SqliteService) {
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'rut': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'confirmar_contrasena': new FormControl("", Validators.required)
    })
   }

  async ngOnInit() {
  await this.SqliteService.inicializarBaseDeDatos();
  }



  async registrar() {
    const formularioRegistro = this.formularioRegistro;
  const f = this.formularioRegistro.value;

  if (this.formularioRegistro.invalid) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Debes ingresar todos los datos',
      buttons: ['OK']
    });

    await alert.present();
    return;
  } else if (f.contrasena !== f.confirmar_contrasena) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Las contraseñas no coinciden',
      buttons: ['OK']
    });

    await alert.present();
    return;
  } else if (f.contrasena.length < 6 || !/[A-Z]/.test(f.contrasena) || !/\d/.test(f.contrasena)) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'La contraseña debe tener al menos 6 caracteres, incluir al menos una mayúscula y un número',
      buttons: ['OK']
    });

    await alert.present();
    return;
  } else if (!f.email.includes('@') || !/\.(com|cl)$/.test(f.email)) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'El correo electrónico debe contener el símbolo "@" y una extensión de dominio válida (por ejemplo, ".com" o ".cl")',
      buttons: ['OK']
    });

    await alert.present();
    return;
  } else if (!this.validarRut(f.rut)) {
    await this.mostrarAlerta('Mensaje', 'El RUT no es válido');
    return;
  } else {
    await this.SqliteService.registrarUsuario(f.usuario, f.nombre, f.apellido, f.rut, f.email, f.contrasena);

    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Registrado correctamente',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(["/login"]);
  }
}
async mostrarAlerta(header: string, message: string) {
  const alert = await this.alertController.create({
    header: header,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}
validarRut(rut: string): boolean {
  // Expresión regular para validar el formato del RUT
  const rutRegex = /^\d{7,8}-[0-9kK]$/;
  
  if (!rutRegex.test(rut)) {
    return false;
  }

  // Separar el RUT y el dígito verificador
  const [rutPart, dv] = rut.split('-');
  
  // Calcular el dígito verificador esperado
  const expectedDv = this.calcularDigitoVerificador(rutPart);

  // Comparar con el dígito verificador ingresado
  return dv.toUpperCase() === expectedDv;
}

calcularDigitoVerificador(rutPart: string): string {
  const factor = [2, 3, 4, 5, 6, 7, 2, 3];
  let sum = 0;

  for (let i = rutPart.length - 1, j = 0; i >= 0; i--, j = (j + 1) % 8) {
    sum += parseInt(rutPart.charAt(i), 10) * factor[j];
  }

  const remainder = sum % 11;
  const dv = remainder === 0 ? 0 : 11 - remainder;

  return dv === 10 ? 'K' : dv.toString();
}
}
