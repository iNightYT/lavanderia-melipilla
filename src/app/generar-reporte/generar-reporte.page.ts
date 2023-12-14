import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.page.html',
  styleUrls: ['./generar-reporte.page.scss'],
})
export class GenerarReportePage implements OnInit {mensajeReporte: string = '';
conteoRopaLimpia: number = 0;
conteoRopaEgresada: number = 0;
conteoRopaMesActual: number = 0;

constructor(private alertController: AlertController, private sqliteService: SqliteService) {}

ngOnInit() {
  this.cargarConteos();
}

async cargarConteos() {
  this.conteoRopaLimpia = await this.sqliteService.obtenerConteoRopaLimpia();
  this.conteoRopaEgresada = await this.sqliteService.obtenerConteoRopaEgresada();
  this.conteoRopaMesActual = await this.sqliteService.obtenerConteoRopaMesActual();
}

async RegistrarReporte() {
  await this.sqliteService.registrarReporte(
    this.mensajeReporte,
    this.conteoRopaLimpia,
    this.conteoRopaEgresada,
    this.conteoRopaMesActual
  );

  const alert = await this.alertController.create({
    header: 'Reporte generado',
    message: 'El reporte ha sido generado con éxito.',
    buttons: ['OK'],
  });

  await alert.present();
}
}
