import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  constructor(private sqlite: SQLite) { }

  async inicializarBaseDeDatos() {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });

  await db.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, nombre TEXT, apellido TEXT, rut TEXT, email TEXT, contrasena TEXT)', []);
  await db.executeSql('CREATE TABLE IF NOT EXISTS ropa (id INTEGER PRIMARY KEY AUTOINCREMENT, marca TEXT, cantidad TEXT, limpieza TEXT, tipo TEXT)', []);
  await db.executeSql('CREATE TABLE IF NOT EXISTS ropa_egresada (id INTEGER PRIMARY KEY AUTOINCREMENT, marca TEXT, cantidad TEXT, limpieza TEXT, tipo TEXT)', []);
  await db.executeSql('CREATE TABLE IF NOT EXISTS reportes (id INTEGER PRIMARY KEY AUTOINCREMENT, cantidad_ropa_limpia TEXT, cantidad_de_ropa_egresada TEXT, conteo_ropa_mensual TEXT, fecha TEXT, mensaje TEXT)', []);
  await db.executeSql('CREATE TABLE IF NOT EXISTS historial (id INTEGER PRIMARY KEY AUTOINCREMENT, medico TEXT, registro TEXT, egresado TEXT, hora TEXT)', []);

}

async registrarUsuario(usuario: string, nombre: string, apellido: string, rut: number,  email: string, contrasena: string) {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });

  await db.executeSql('INSERT INTO usuarios (usuario, nombre, apellido, rut, email, contrasena) VALUES (?, ?, ?, ?, ?, ?)', [usuario, nombre, apellido, rut, email, contrasena]);
}

async autenticarUsuario(usuario: string, contrasena: string): Promise<boolean> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });

  const resultado = await db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?', [usuario, contrasena]);

  if (resultado.rows.length > 0) {
    // Usuario autenticado exitosamente
    return true;
  } else {
    // Falló la autenticación
    return false;
  }
}
async registrarRopa(datosRopa: any) {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });

  await db.executeSql('INSERT INTO ropa (marca, cantidad, limpieza, tipo) VALUES (?, ?, ?, ?)', [datosRopa.marca, datosRopa.cantidad, datosRopa.limpieza, datosRopa.tipo]);
}
async obtenerMarcasRegistradas(): Promise<any[]> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT * FROM ropa', []);

  const marcasRegistradas = [];
  for (let i = 0; i < resultado.rows.length; i++) {
    marcasRegistradas.push(resultado.rows.item(i));
  }

  return marcasRegistradas;
}
async registrarRopaEgresada(datosRopaEgresada: any) {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  await db.executeSql('INSERT INTO ropa_egresada (marca, cantidad, limpieza, tipo) VALUES (?, ?, ?, ?)', [
    datosRopaEgresada.marca,
    datosRopaEgresada.cantidad,
    datosRopaEgresada.limpieza,
    datosRopaEgresada.tipo,
  ]);
}

async obtenerRopasEgresadas(): Promise<any[]> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT * FROM ropa_egresada', []);

  const ropasEgresadas = [];
  for (let i = 0; i < resultado.rows.length; i++) {
    ropasEgresadas.push(resultado.rows.item(i));
  }

  return ropasEgresadas;
}

async obtenerConteoRopaLimpia(): Promise<number> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT COUNT(*) AS conteo FROM ropa', []);

  return resultado.rows.item(0).conteo;
}

async obtenerConteoRopaEgresada(): Promise<number> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT COUNT(*) AS conteo FROM ropa_egresada', []);

  return resultado.rows.item(0).conteo;
}

async obtenerConteoRopaMesActual(): Promise<number> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  // Ajusta la consulta para obtener el conteo de este mes según tu estructura de datos
  const resultado = await db.executeSql('SELECT COUNT(*) AS conteo FROM ropa WHERE strftime("%m", fecha_columna) = strftime("%m", "now")', []);

  return resultado.rows.item(0).conteo;
}

async registrarReporte(mensaje: string, conteoRopaLimpia: number, conteoRopaEgresada: number, conteoRopaMesActual: number): Promise<void> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  await db.executeSql('INSERT INTO reportes (mensaje, cantidad_ropa_limpia, cantidad_de_ropa_egresada, conteo_ropa_mensual, fecha) VALUES (?, ?, ?, ?, datetime("now"))', [
    mensaje,
    conteoRopaLimpia,
    conteoRopaEgresada,
    conteoRopaMesActual,
  ]);
}
async obtenerCantidadReportes(): Promise<number> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT COUNT(*) AS cantidad FROM reportes', []);

  return resultado.rows.item(0).cantidad;
}
async obtenerReportes(): Promise<any[]> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT * FROM reportes', []);

  const reportes = [];
  for (let i = 0; i < resultado.rows.length; i++) {
    reportes.push(resultado.rows.item(i));
  }

  return reportes;
}

async registrarRegistro(medico: string, cantidadRopa: number, hora: string) {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  await db.executeSql('INSERT INTO historial (medico, cantidad_ropa, hora) VALUES (?, ?, ?)', [
    medico,
    cantidadRopa,
    hora,
  ]);
}

async registrarEgreso(medico: string, cantidadEgresada: number, hora: string) {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });
  const horaActual = this.obtenerHoraActual();

  await db.executeSql('INSERT INTO historial (medico, cantidad_egresada, hora) VALUES (?, ?, ?)', [
    medico,
    cantidadEgresada,
    horaActual,
  ]);
}
public obtenerHoraActual(): string {
  const fechaActual = new Date();
  const horas = fechaActual.getHours().toString().padStart(2, '0');
  const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
  const segundos = fechaActual.getSeconds().toString().padStart(2, '0');

  const horaActual = `${horas}:${minutos}:${segundos}`;
  return horaActual;
}
async obtenerUsuarioActual(): Promise<any> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const idUsuario = localStorage.getItem('idUsuario'); // Asegúrate de que 'idUsuario' sea la clave correcta

  if (!idUsuario) {
    // Manejar el caso en el que no haya una ID de usuario almacenada
    return null;
  }

  const resultado = await db.executeSql('SELECT * FROM usuarios WHERE id = ?', [idUsuario]);

  if (resultado.rows.length > 0) {
    // Devolver el usuario encontrado
    return resultado.rows.item(0);
  } else {
    // Manejar el caso en el que no se encuentra un usuario con la ID proporcionada
    return null;
  }
}
async obtenerHistorialDeRopa(): Promise<any[]> {
  const db = await this.sqlite.create({
    name: 'data.db',
    location: 'default',
  });

  const resultado = await db.executeSql('SELECT * FROM historial', []);

  const historial = [];
  for (let i = 0; i < resultado.rows.length; i++) {
    historial.push(resultado.rows.item(i));
  }

  // Devolver el array, incluso si está vacío
  return historial;
}
}